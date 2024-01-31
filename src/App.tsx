import React from "react";
import { ConfigProvider, Button, Space, Input, Divider } from "antd";

const App: React.FC = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#00b96b",
              algorithm: true,
            },
            Input: {
              colorPrimary: "#eb2f96",
              algorithm: true,
            },
          },
        }}
      >
        <Space>
          <div style={{ fontSize: 14 }}>Enable Algorithm</div>
          <Input placeholder="Input Here " />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
      <Divider />

      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#00b96b",
            },
            Input: {
              colorPrimary: "#eb2f96",
            },
          },
        }}
      >
        <Space>
          <div style={{ fontSize: 14 }}>Disable algorithm: </div>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
    </>
  );
};

export default App;
