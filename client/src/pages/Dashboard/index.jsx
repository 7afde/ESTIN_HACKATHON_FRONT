import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  RestOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders, getRevenue } from "../../API";
import Map from "../../components/custom/Map";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./index.module.css";
import MyMap from "../../components/custom/MyMap";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4} className="pt-10 pl-10 text-xl">
        Dashboard
      </Typography.Title>
      <Space direction="horizontal" className={styles.center}>
        <DashboardCard
          icon={
            <RestOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            />
          }
          title={"Empty Trash"}
          value={orders}
        />
        <DashboardCard
          icon={
            <RestOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(255, 148, 112, 0.45)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            />
          }
          title={"Medium Trash"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <RestOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            />
          }
          title={"Overflowing Trash"}
          value={revenue}
        />
      </Space>
      <MyMap />
    </Space>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Dashboard;
