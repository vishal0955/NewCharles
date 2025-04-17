import React, { useState, useEffect } from 'react';
import { Table, Button, Space, notification, Dropdown, Menu, Modal, Form, Input, DatePicker, Select } from 'antd';
import { DownloadOutlined, PlusOutlined, EditOutlined, EyeOutlined, DeleteOutlined, ExportOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import { Link } from 'react-router-dom';


const ProjectReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingReport, setEditingReport] = useState(null);
  const [form] = Form.useForm();

  // Mock data - Replace with actual API calls
  useEffect(() => {
    setReports([
      {
        id: 1,
        projectName: 'Office Management App',
        status: 'In Progress',
        startDate: '2024-01-01',
        endDate: '2024-06-30',
        completion: 75,
        budget: 50000,
        team: ['John Doe', 'Jane Smith'],
      },
      // Add more mock data as needed
    ]);
  }, []);

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
      sorter: (a, b) => a.projectName.localeCompare(b.projectName),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'In Progress', value: 'In Progress' },
        { text: 'Completed', value: 'Completed' },
        { text: 'On Hold', value: 'On Hold' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      sorter: (a, b) => new Date(a.endDate) - new Date(b.endDate),
    },
    {
      title: 'Completion (%)',
      dataIndex: 'completion',
      key: 'completion',
      sorter: (a, b) => a.completion - b.completion,
    },
    {
      title: 'Budget ($)',
      dataIndex: 'budget',
      key: 'budget',
      sorter: (a, b) => a.budget - b.budget,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
              <Button
            icon={<DownloadOutlined />}
            onClick={() => handleView(record)}
          />
       <Link to={"/project/reportsdetails"}>   <Button
            icon={<EyeOutlined />}
            // onClick={() => handleView(record)}
          /></Link>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingReport(null);
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingReport(record);
    form.setFieldsValue(record);
    setModalVisible(true);
  };

  const handleView = (record) => {
    Modal.info({
      title: 'Project Report Details',
      content: (
        <div>
          <p><strong>Project Name:</strong> {record.projectName}</p>
          <p><strong>Status:</strong> {record.status}</p>
          <p><strong>Start Date:</strong> {record.startDate}</p>
          <p><strong>End Date:</strong> {record.endDate}</p>
          <p><strong>Completion:</strong> {record.completion}%</p>
          <p><strong>Budget:</strong> ${record.budget}</p>
          <p><strong>Team Members:</strong> {record.team.join(', ')}</p>
        </div>
      ),
      width: 600,
    });
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this report?',
      content: 'This action cannot be undone.',
      onOk: () => {
        setReports(reports.filter(item => item.id !== record.id));
        notification.success({
          message: 'Report deleted successfully',
        });
      },
    });
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      if (editingReport) {
        setReports(reports.map(item =>
          item.id === editingReport.id ? { ...item, ...values } : item
        ));
        notification.success({
          message: 'Report updated successfully',
        });
      } else {
        const newReport = {
          id: reports.length + 1,
          ...values,
          team: values.team || [],
        };
        setReports([...reports, newReport]);
        notification.success({
          message: 'Report added successfully',
        });
      }
      setModalVisible(false);
    });
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(reports);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Project Reports');
    XLSX.writeFile(wb, 'project_reports.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Project Reports', 20, 10);
    
    const headers = columns
      .filter(col => col.key !== 'actions')
      .map(col => col.title);
    
    const data = reports.map(report =>
      columns
        .filter(col => col.key !== 'actions')
        .map(col => report[col.dataIndex]?.toString() || '')
    );

    doc.autoTable({
      head: [headers],
      body: data,
      startY: 20,
    });

    doc.save('project_reports.pdf');
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Project Reports</h1>
        <Space>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
          >
            Add Report
          </Button>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="excel" onClick={exportToExcel}>
                  Export to Excel
                </Menu.Item>
                <Menu.Item key="pdf" onClick={exportToPDF}>
                  Export to PDF
                </Menu.Item>
              </Menu>
            }
          >
            <Button icon={<ExportOutlined />}>Export</Button>
          </Dropdown>
        </Space>
      </div>

      <Table
        columns={columns}
        dataSource={reports}
        loading={loading}
        rowKey="id"
        pagination={{
          total: reports.length,
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />

      <Modal
        title={editingReport ? 'Edit Report' : 'Add Report'}
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="projectName"
            label="Project Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value="In Progress">In Progress</Select.Option>
              <Select.Option value="Completed">Completed</Select.Option>
              <Select.Option value="On Hold">On Hold</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true }]}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="completion"
            label="Completion (%)"
            rules={[{ required: true }]}
          >
            <Input type="number" min={0} max={100} />
          </Form.Item>
          <Form.Item
            name="budget"
            label="Budget ($)"
            rules={[{ required: true }]}
          >
            <Input type="number" min={0} />
          </Form.Item>
          <Form.Item
            name="team"
            label="Team Members"
          >
            <Select mode="tags" style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectReports;
