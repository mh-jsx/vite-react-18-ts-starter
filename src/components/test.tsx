import { Button, Table } from 'antd';

function Test() {
  return (
    <div>
      <div className="flex gap-4">
        <Button type="primary">asd</Button>
        <Button>asd</Button>

        <Table dataSource={[]} columns={[]} />
      </div>
    </div>
  );
}

export default Test;
