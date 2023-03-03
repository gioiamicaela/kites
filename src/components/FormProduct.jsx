import { Button, Form, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const App = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
  >
    <Form.Item
      label="Nombre:"
      name="nombre"
      className="formLabels"
      style={{ marginTop: "50px" }}
    >
      <Input className="formInput" />
    </Form.Item>

    <Form.Item label="Código:" name="codigo" className="formLabels">
      <Input className="formInput" />
    </Form.Item>

    <Form.Item label="Categoría:" name="categoria" className="formLabels">
      <Input className="formInput" />
    </Form.Item>

    <Form.Item label="Idiomas" name="idiomas" className="formLabels">
      <Button
        type="dashed"
        style={{
          width: "60%",
        }}
        icon={<PlusOutlined />}
        className="idiomaButton"
      >
        Añadir lengua
      </Button>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button htmlType="submit" className="formButton">
        + Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
