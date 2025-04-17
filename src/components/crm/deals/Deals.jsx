import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Search, ChevronDown, Info, RefreshCw, Columns, List, ExternalLink } from 'lucide-react';

const DealCard = ({ id, title, days }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 mb-2 border border-gray-200 rounded-md shadow-sm"
    >
      <h3 className="text-blue-600 font-medium mb-2">{title}</h3>
      <button className="text-sm bg-gray-100 border border-gray-300 rounded px-3 py-1 mb-3">
        Add Contact
      </button>
      <p className="text-sm text-gray-600">No activity for {days} days</p>
      <p className="text-sm text-gray-600">⚠ No activity scheduled</p>
    </div>
  );
};

const KanbanColumn = ({ title, count, deals }) => {
  return (
    <div className="flex-1 min-w-64 max-w-72 bg-gray-50 border-r border-gray-200">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center">
          <h2 className="font-medium text-gray-700">{title}</h2>
          <span className="ml-2 font-medium">{count}</span>
        </div>
        <button className="text-gray-400">
          <ChevronDown size={18} />
        </button>
      </div>
      <div className="p-2 h-full">
        {deals.map(deal => (
          <DealCard 
            key={deal.id} 
            id={deal.id} 
            title={deal.title} 
            days={deal.days}
          />
        ))}
        <div className="mt-8 p-4 border-t border-gray-200">
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Total: £0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalesPipelineKanban = () => {
  const [columns, setColumns] = useState([
    {
      id: 'qualified',
      title: 'QUALIFIED',
      count: 1,
      deals: [
        { id: 'deal1', title: 'StraightIn Lead - Turning Point Management...', days: 9 }
      ]
    },
    {
      id: 'contact_made',
      title: 'CONTACT MADE',
      count: 0,
      deals: []
    },
    {
      id: 'meeting_scheduled',
      title: 'MEETING SCHEDULED',
      count: 0,
      deals: []
    },
    {
      id: 'quoting',
      title: 'QUOTING',
      count: 0,
      deals: []
    },
    {
      id: 'quoted',
      title: 'QUOTED',
      count: 0,
      deals: []
    }
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (!over || active.id === over.id) return;
    
    // Find the source and destination columns
    const sourceColumnId = columns.find(col => 
      col.deals.some(deal => deal.id === active.id)
    ).id;
    
    const destColumnId = over.id;
    
    // Only process if we're dropping onto a column (not another deal)
    if (columns.some(col => col.id === destColumnId)) {
      setColumns(prevColumns => {
        // Create new columns array
        return prevColumns.map(column => {
          // Remove from source column
          if (column.id === sourceColumnId) {
            return {
              ...column,
              deals: column.deals.filter(deal => deal.id !== active.id),
              count: column.count - 1
            };
          }
          // Add to destination column
          if (column.id === destColumnId) {
            const movingDeal = prevColumns
              .find(col => col.id === sourceColumnId)
              .deals.find(deal => deal.id === active.id);
              
            return {
              ...column,
              deals: [...column.deals, movingDeal],
              count: column.count + 1
            };
          }
          return column;
        });
      });
    }
  };

  const allDeals = columns.flatMap(column => column.deals);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <h1 className="text-xl font-medium text-teal-600 mr-2">Deals</h1>
          <ChevronDown className="text-teal-600" />
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
            Actions <ChevronDown size={16} />
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-gray-700">
            Import
          </button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">
            Create deal
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <div className="px-4 py-2 border-r border-l border-gray-200 border-b-2 border-b-white -mb-px bg-white">
          All deals
        </div>
        <div className="px-4 py-2 text-gray-600">
          My deals
        </div>
        <div className="px-4 py-2 text-gray-600">
          Open Deals
        </div>
        <div className="ml-auto px-4 py-2 flex items-center text-teal-600">
          <span className="mr-1">Add view</span>
          <span>(3/50)</span>
        </div>
        <div className="px-4 py-2 text-teal-600">
          All Views
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex mr-4">
            <button className="px-2 py-1 border border-gray-300 rounded-l bg-gray-100">
              <List size={16} />
            </button>
            <button className="px-2 py-1 border-t border-b border-r border-gray-300 rounded-r">
              <Columns size={16} />
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center px-3 py-1 border border-gray-300 rounded text-gray-700">
              Sales pipeline <ChevronDown size={16} />
            </button>
          </div>
          
          <button className="ml-3 flex items-center px-3 py-1 border border-gray-300 rounded text-gray-700">
            Deal owner <ChevronDown size={16} />
          </button>
          
          <button className="ml-3 flex items-center px-3 py-1 border border-gray-300 rounded text-gray-700">
            Create date <ChevronDown size={16} />
          </button>
          
          <button className="ml-3 flex items-center px-3 py-1 border border-gray-300 rounded text-gray-700">
            More <ChevronDown size={16} />
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex items-center px-3 py-1 text-gray-700">
            Advanced filters
          </button>
          <button className="ml-3 flex items-center text-teal-600">
            Show Insights <Info size={16} className="ml-1" />
          </button>
        </div>
      </div>
      
      {/* Search and filters */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-8 pr-4 py-1 border border-gray-300 rounded w-64"
            value="Tur"
          />
          <Search size={16} className="absolute left-2 top-2 text-gray-400" />
        </div>
        <div className="flex">
          <button className="flex items-center px-3 py-1 text-teal-600 border border-gray-300 rounded mr-3">
            Create report <ExternalLink size={16} className="ml-1" />
          </button>
          <button className="flex items-center px-3 py-1 border border-gray-300 rounded">
            Board options <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
      
      {/* Kanban board */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex overflow-x-auto flex-1">
          <SortableContext
            items={columns.map(col => col.id)}
            strategy={horizontalListSortingStrategy}
          >
            {columns.map(column => (
              <KanbanColumn
                key={column.id}
                title={column.title}
                count={column.count}
                deals={column.deals}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>
    </div>
  );
};

export default SalesPipelineKanban;