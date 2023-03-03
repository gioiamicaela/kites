import { Button, Form, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Option } = Select;

function FormProduct() {
  const [webValue, setWebValue] = useState(null);

  return (
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

      <Form.Item name="webs" label="Webs" className="formLabels">
        <Select
          placeholder="Seleccionar web"
          allowClear
          className="formInput"
          value={webValue}
          onChange={setWebValue}
        >
          "Ficha completa", "Landing comercial", "Loading 2", "Ficha
          decoración", "Otra",
          <Option value="completa">Ficha Completa</Option>
          <Option value="ladingC">Landing Comercial</Option>
          <Option value="landing2">Landing 2</Option>
          <Option value="decoracion">Ficha Decoración</Option>
          <Option value="otra">Otra</Option>
        </Select>
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
          offset: 16,
          span: 16,
        }}
      >
        <Button
          htmlType="submit"
          className="formButton"
          icon={<PlusOutlined />}
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "21px",
            color: "#ffffff",
          }}
        >
          Aceptar
        </Button>
      </Form.Item>
    </Form>
  );
}
export default FormProduct;
