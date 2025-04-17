import React, { useEffect, useState } from "react";
import { Table } from "antd";

const Datatable = ({ columns, dataSource, Selection }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selections, setSelections] = useState(true);
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);

  useEffect(() => {
    setSelections(Selection);
  }, [Selection]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    const filteredData = dataSource.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredDataSource(filteredData);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      {/* Table Header */}
      <div className="table-top-data">
        <div className="row p-3">
          <div className="col-sm-12 col-md-6"></div>
          <div className="col-sm-12 col-md-6">
            <div className="dataTables_filter text-end mb-0">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <Table
        className="table datanew dataTable no-footer"
        columns={columns}
        dataSource={filteredDataSource}
        rowHoverable={false}
        rowSelection={selections ? rowSelection : undefined}
        pagination={{
          locale: { items_per_page: "" },
          nextIcon: <i className="ti ti-chevron-right" />,
          prevIcon: <i className="ti ti-chevron-left" />,
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30"],
          showTotal: (total, range) =>
            `Showing ${range[0]} - ${range[1]} of ${total} entries`,
        }}
      />
    </>
  );
};

export default Datatable;
