import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input,  Dropdown, Menu, DatePicker, message, Space, Tag, Tooltip } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined, ExportOutlined, PlusOutlined, BellOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Milestones = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [milestones, setMilestones] = useState([
    {
      key: '1',
      projectName: 'E-Commerce Platform',
      title: 'Project Planning Phase',
      milestoneName: 'Initial Planning',
      dueDate: '2024-03-15',
      status: 'In Progress',
      completion: 65,
      assignedTo: 'John Doe'
    },
    {
      key: '2',
      projectName: 'Mobile App Development',
      title: 'Development Sprint 1',
      milestoneName: 'Feature Development',
      dueDate: '2024-03-30',
      status: 'Pending',
      completion: 0,
      assignedTo: 'Jane Smith'
    }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
      render: (projectName) => (
        <Link to={`/project/MilestonesDetails`}>{projectName}</Link>
      ),
    },
    // {
    //   title: 'Title',
    //   dataIndex: 'title',
    //   key: 'title',
    // },
    {
      title: 'Milestone Name',
      dataIndex: 'milestoneName',
      key: 'milestoneName',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'In Progress' ? 'blue' : status === 'Completed' ? 'green' : 'orange';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    
    {
      title: 'Completion (%)',
      dataIndex: 'completion',
      key: 'completion',
      render: (completion) => (
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${completion}%`, backgroundColor: completion > 70 ? '#52c41a' : '#1890ff' }}
          />
          <span>{completion}%</span>
        </div>
      )
    },
    {
      title: 'Assigned To',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Tooltip title="Edit">
            <Button 
              icon={<EditOutlined />}
              type="text"
            />
          </Tooltip>
          <Tooltip title="View">
          <Link to={"/project/MilestonesDetails"}>  <Button 
              icon={<EyeOutlined />} 
              type="text"
            /></Link>
          </Tooltip>
          <Tooltip title="Delete">
            <Button 
              icon={<DeleteOutlined />} 
              onClick={() => handleDelete(record.key)}
              type="text"
              danger
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    form.resetFields();
    setEditingKey('');
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    form.setFieldsValue(record);
    setEditingKey(record.key);
    setIsModalVisible(true);
  };

  const handleView = (record) => {
    Modal.info({
      title: 'Milestone Details',
      content: (
        <div>
            <p><strong>Project Name:</strong> {record.title}</p> 
          <p><strong>Due Date:</strong> {record.dueDate}</p>
          <p><strong>Status:</strong> {record.status}</p>
          <p><strong>Completion:</strong> {record.completion}%</p>
          <p><strong>Assigned To:</strong> {record.assignedTo}</p>
        </div>
      ),
    });
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this milestone?',
      onOk: () => {
        setMilestones(milestones.filter(item => item.key !== key));
        message.success('Milestone deleted successfully');
      },
    });
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const newMilestone = {
        ...values,
        key: editingKey || String(milestones.length + 1),
        dueDate: values.dueDate.format('YYYY-MM-DD'),
      };

      if (editingKey) {
        setMilestones(milestones.map(item => 
          item.key === editingKey ? newMilestone : item
        ));
        message.success('Milestone updated successfully');
      } else {
        setMilestones([...milestones, newMilestone]);
        message.success('Milestone added successfully');
      }

      setIsModalVisible(false);
      form.resetFields();
      setEditingKey('');
    });
  };

  const exportData = milestones.map(({ key, ...item }) => item);

  return (
    <div className="milestones-container" style={{ padding: '24px', height:"100vh"}}>
      <div className="header" style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Project Milestones</h2>
        <Space>
          <Button 
            type="primary" 
            icon={<PlusOutlined />} 
            onClick={handleAdd}
          >
            Add Milestone
          </Button>
              <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item key="excel" >
                            Export to Excel
                          </Menu.Item>
                          <Menu.Item key="pdf" >
                            Export to PDF
                          </Menu.Item>
                        </Menu>
                      }
                    >
                      <Button icon={<ExportOutlined />}>Export</Button>
                    </Dropdown>
          
          <Tooltip title="Notifications">
            <Button icon={<BellOutlined />} />
          </Tooltip>
        </Space>
      </div>

      <Table  className={`${darkMode ? "table-dark" : "" } `}
        columns={columns} 
        dataSource={milestones}
        pagination={false}
      />

      <Modal
        title={editingKey ? 'Edit Milestone' : 'Add Milestone'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setEditingKey('');
        }}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="projectName"
            label="Project Name"
            rules={[{ required: true, message: 'Please input the project name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="milestoneName"
            label="Milestone Name"
            rules={[{ required: true, message: 'Please input the milestone name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select the due date!' }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please input the status!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="completion"
            label="Completion (%)"
            rules={[{ required: true, message: 'Please input the completion percentage!' }]}
          >
            <Input type="number" min={0} max={100} />
          </Form.Item>
          <Form.Item
            name="assignedTo"
            label="Assigned To"
            rules={[{ required: true, message: 'Please input the assignee!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <style jsx>{`
        .progress-bar {
          width: 100%;
          height: 20px;
          background-color: #f0f0f0;
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        .progress-bar span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #000;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default Milestones;
