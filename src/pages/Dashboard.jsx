import React from 'react';
import { Row, Col, Card, Statistic, Typography, Radio, Table, Progress, Tag, Button } from 'antd';
import { Pie, Gauge, Line } from '@ant-design/charts';
import { 
  DollarOutlined, 
  ShoppingCartOutlined, 
  CarOutlined, 
  TeamOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Title } = Typography;

/**
 * Multi-Warehouse Command Center Dashboard
 * Updated: 2024-12-20 00:35:00
 * Purpose: Showcase unified multi-warehouse management capabilities with clickable warehouse navigation
 */
const Dashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // Mock data for charts
  const orderStatusData = [
    { type: 'Delivered', value: 27 },
    { type: 'In Transit', value: 25 },
    { type: 'Pending', value: 18 },
    { type: 'Processing', value: 15 },
    { type: 'Cancelled', value: 5 },
  ];

  const weeklyRevenueData = [
    { date: 'Mon', revenue: 12000 },
    { date: 'Tue', revenue: 13500 },
    { date: 'Wed', revenue: 11800 },
    { date: 'Thu', revenue: 14200 },
    { date: 'Fri', revenue: 15600 },
    { date: 'Sat', revenue: 9800 },
    { date: 'Sun', revenue: 11200 },
  ];

  // Mock data for warehouse overview table with updated names
  const warehouseData = [
    {
      key: '1',
      warehouseName: t('dashboard.warehouse1YYZ'),
      capacityUsage: 85,
      inboundTasks: 5,
      outboundTasks: 22,
      workerStatus: '3 Active / 1 Idle',
      alerts: t('dashboard.highVolume'),
      alertColor: 'red'
    },
    {
      key: '2',
      warehouseName: t('dashboard.warehouse2YVR'),
      capacityUsage: 72,
      inboundTasks: 3,
      outboundTasks: 18,
      workerStatus: '2 Active / 2 Idle',
      alerts: t('dashboard.normal'),
      alertColor: 'green'
    },
    {
      key: '3',
      warehouseName: t('dashboard.warehouse3YYC'),
      capacityUsage: 91,
      inboundTasks: 8,
      outboundTasks: 15,
      workerStatus: '4 Active / 0 Idle',
      alerts: t('dashboard.lowSpace'),
      alertColor: 'orange'
    },
    {
      key: '4',
      warehouseName: t('dashboard.warehouse4YUL'),
      capacityUsage: 68,
      inboundTasks: 2,
      outboundTasks: 12,
      workerStatus: '2 Active / 1 Idle',
      alerts: t('dashboard.normal'),
      alertColor: 'green'
    }
  ];

  // Handle warehouse navigation
  const handleWarehouseClick = (warehouseId) => {
    navigate(`/warehouse/${warehouseId}`);
  };

  // Table columns configuration
  const columns = [
    {
      title: t('dashboard.warehouseName'),
      dataIndex: 'warehouseName',
      key: 'warehouseName',
      width: 200,
    },
    {
      title: t('dashboard.capacityUsage'),
      dataIndex: 'capacityUsage',
      key: 'capacityUsage',
      width: 150,
      render: (usage) => (
        <Progress 
          percent={usage} 
          size="small" 
          status={usage > 90 ? 'exception' : usage > 80 ? 'active' : 'normal'}
        />
      ),
    },
    {
      title: t('dashboard.inboundTasks'),
      dataIndex: 'inboundTasks',
      key: 'inboundTasks',
      width: 120,
      align: 'center',
    },
    {
      title: t('dashboard.outboundTasks'),
      dataIndex: 'outboundTasks',
      key: 'outboundTasks',
      width: 120,
      align: 'center',
    },
    {
      title: t('dashboard.workerStatus'),
      dataIndex: 'workerStatus',
      key: 'workerStatus',
      width: 150,
      align: 'center',
    },
    {
      title: t('dashboard.alerts'),
      dataIndex: 'alerts',
      key: 'alerts',
      width: 120,
      align: 'center',
      render: (alerts, record) => (
        <Tag color={record.alertColor}>
          {alerts}
        </Tag>
      ),
    },
  ];

  const pieConfig = {
    data: orderStatusData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'element-active' }],
    color: ['#52c41a', '#1890ff', '#faad14', '#722ed1', '#f5222d'],
  };

  const gaugeConfig = {
    percent: 0.75,
    range: {
      color: ['#f5222d', '#faad14', '#52c41a'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
        },
      },
    },
  };

  const lineConfig = {
    data: weeklyRevenueData,
    xField: 'date',
    yField: 'revenue',
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
    color: '#1890ff',
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('dashboard.multiWarehouseCommandCenter')}
      </Title>

      {/* Warehouse Navigation */}
      <Card style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontWeight: 500, fontSize: '16px' }}>{t('dashboard.warehouseView')}</span>
        </div>
        <Row gutter={[12, 12]}>
          <Col xs={24} sm={12} md={6}>
            <Button 
              type="primary" 
              size="large"
              icon={<HomeOutlined />}
              style={{ width: '100%', height: '60px', fontSize: '14px' }}
              onClick={() => handleWarehouseClick('1')}
            >
              {t('dashboard.warehouse1YYZ')}
            </Button>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Button 
              type="primary" 
              size="large"
              icon={<HomeOutlined />}
              style={{ width: '100%', height: '60px', fontSize: '14px' }}
              onClick={() => handleWarehouseClick('2')}
            >
              {t('dashboard.warehouse2YVR')}
            </Button>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Button 
              type="primary" 
              size="large"
              icon={<HomeOutlined />}
              style={{ width: '100%', height: '60px', fontSize: '14px' }}
              onClick={() => handleWarehouseClick('3')}
            >
              {t('dashboard.warehouse3YYC')}
            </Button>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Button 
              type="primary" 
              size="large"
              icon={<HomeOutlined />}
              style={{ width: '100%', height: '60px', fontSize: '14px' }}
              onClick={() => handleWarehouseClick('4')}
            >
              {t('dashboard.warehouse4YUL')}
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Updated Statistics Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.totalInventoryValue')}
              value={1250800}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<DollarOutlined />}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.totalAvailableCapacity')}
              value={75}
              valueStyle={{ color: '#1890ff' }}
              prefix={<TeamOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.pendingOrdersToday')}
              value={89}
              valueStyle={{ color: '#722ed1' }}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title={t('dashboard.shipmentsDispatchedToday')}
              value={152}
              valueStyle={{ color: '#faad14' }}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Warehouse Live Status Table */}
      <Card title={t('dashboard.warehouseLiveStatus')} style={{ marginBottom: 24 }}>
        <Table
          columns={columns}
          dataSource={warehouseData}
          pagination={false}
          size="middle"
          scroll={{ x: 800 }}
        />
      </Card>

      {/* Charts Row 1 */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={12}>
          <Card title={t('dashboard.orderStatusDistribution')} style={{ height: 400 }}>
            <Pie {...pieConfig} height={300} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={t('dashboard.multiWarehouseCapacityOverview')} style={{ height: 400 }}>
            <div style={{ textAlign: 'center', paddingTop: 40 }}>
              <Gauge {...gaugeConfig} height={250} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Charts Row 2 */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Card title={t('dashboard.weeklyRevenueTrend')} style={{ height: 400 }}>
            <Line {...lineConfig} height={300} />
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title={t('dashboard.quickActions')}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  size="small" 
                  hoverable 
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                >
                  <ShoppingCartOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                  <div style={{ marginTop: 8 }}>{t('dashboard.newOrder')}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  size="small" 
                  hoverable 
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                >
                  <CarOutlined style={{ fontSize: 24, color: '#52c41a' }} />
                  <div style={{ marginTop: 8 }}>{t('dashboard.dispatch')}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  size="small" 
                  hoverable 
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                >
                  <TeamOutlined style={{ fontSize: 24, color: '#722ed1' }} />
                  <div style={{ marginTop: 8 }}>{t('dashboard.team')}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card 
                  size="small" 
                  hoverable 
                  style={{ textAlign: 'center', cursor: 'pointer' }}
                >
                  <DollarOutlined style={{ fontSize: 24, color: '#faad14' }} />
                  <div style={{ marginTop: 8 }}>{t('dashboard.reports')}</div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
