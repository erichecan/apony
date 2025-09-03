import React from 'react';
import { Row, Col, Card, Typography, Breadcrumb, Statistic, Progress, Tag, Table } from 'antd';
import { 
  HomeOutlined, 
  TeamOutlined, 
  ShoppingCartOutlined, 
  CarOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

/**
 * Warehouse Detail Page Component
 * Created: 2024-12-20 00:30:00
 * Purpose: Detailed view for individual warehouse operations
 */
const WarehouseDetailPage = () => {
  const { t } = useLanguage();
  const { warehouseId } = useParams();
  
  // Warehouse data mapping
  const warehouseData = {
    '1': {
      id: '1',
      name: t('dashboard.warehouse1YYZ'),
      code: 'YYZ',
      city: 'Toronto',
      capacity: 85,
      activeWorkers: 3,
      idleWorkers: 1,
      inboundTasks: 5,
      outboundTasks: 22,
      alertStatus: 'highVolume',
      alertColor: 'red',
      alertText: t('dashboard.highVolume'),
      temperature: '22°C',
      humidity: '45%',
      lastUpdated: '2 min ago'
    },
    '2': {
      id: '2',
      name: t('dashboard.warehouse2YVR'),
      code: 'YVR',
      city: 'Vancouver',
      capacity: 72,
      activeWorkers: 2,
      idleWorkers: 2,
      inboundTasks: 3,
      outboundTasks: 18,
      alertStatus: 'normal',
      alertColor: 'green',
      alertText: t('dashboard.normal'),
      temperature: '19°C',
      humidity: '52%',
      lastUpdated: '1 min ago'
    },
    '3': {
      id: '3',
      name: t('dashboard.warehouse3YYC'),
      code: 'YYC',
      city: 'Calgary',
      capacity: 91,
      activeWorkers: 4,
      idleWorkers: 0,
      inboundTasks: 8,
      outboundTasks: 15,
      alertStatus: 'lowSpace',
      alertColor: 'orange',
      alertText: t('dashboard.lowSpace'),
      temperature: '18°C',
      humidity: '38%',
      lastUpdated: '3 min ago'
    },
    '4': {
      id: '4',
      name: t('dashboard.warehouse4YUL'),
      code: 'YUL',
      city: 'Montreal',
      capacity: 68,
      activeWorkers: 2,
      idleWorkers: 1,
      inboundTasks: 2,
      outboundTasks: 12,
      alertStatus: 'normal',
      alertColor: 'green',
      alertText: t('dashboard.normal'),
      temperature: '21°C',
      humidity: '48%',
      lastUpdated: '1 min ago'
    }
  };

  const warehouse = warehouseData[warehouseId] || warehouseData['1'];

  // Mock data for worker status
  const workerData = [
    {
      key: '1',
      name: 'John Smith',
      status: 'active',
      currentTask: t('dashboard.picking'),
      location: 'A-12',
      efficiency: 95
    },
    {
      key: '2',
      name: 'Sarah Johnson',
      status: 'active',
      currentTask: t('dashboard.receiving'),
      location: 'B-03',
      efficiency: 88
    },
    {
      key: '3',
      name: 'Mike Chen',
      status: 'active',
      currentTask: t('dashboard.packing'),
      location: 'C-07',
      efficiency: 92
    },
    {
      key: '4',
      name: 'Lisa Wang',
      status: 'idle',
      currentTask: t('dashboard.available'),
      location: 'Break Room',
      efficiency: 85
    }
  ];

  // Table columns for workers
  const workerColumns = [
    {
      title: t('dashboard.workerName'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('dashboard.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'orange'}>
          {status === 'active' ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
          {status === 'active' ? t('dashboard.active') : t('dashboard.idle')}
        </Tag>
      ),
    },
    {
      title: t('dashboard.currentTask'),
      dataIndex: 'currentTask',
      key: 'currentTask',
    },
    {
      title: t('dashboard.location'),
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: t('dashboard.efficiency'),
      dataIndex: 'efficiency',
      key: 'efficiency',
      render: (efficiency) => (
        <Progress 
          percent={efficiency} 
          size="small" 
          status={efficiency > 90 ? 'success' : efficiency > 80 ? 'normal' : 'exception'}
        />
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb style={{ marginBottom: '16px' }}>
        <Breadcrumb.Item>
          <Link to="/">{t('dashboard.title')}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{warehouse.name}</Breadcrumb.Item>
      </Breadcrumb>

      {/* Page Header */}
      <Card
        style={{ 
          background: '#fff', 
          marginBottom: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: 'none'
        }}
        bodyStyle={{ padding: '24px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <Title level={2} style={{ margin: 0, marginBottom: '8px' }}>
              {warehouse.name}
            </Title>
            <Text style={{ fontSize: '16px', color: '#666' }}>
              {t('dashboard.warehouseDetailSubtitle')} - {warehouse.city}
            </Text>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Tag color={warehouse.alertColor} style={{ fontSize: '14px', padding: '4px 12px' }}>
              <AlertOutlined /> {warehouse.alertText}
            </Tag>
            <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
              {t('dashboard.lastUpdated')}: {warehouse.lastUpdated}
            </div>
          </div>
        </div>
      </Card>

      {/* Key Statistics */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('dashboard.capacityUsage')}
              value={warehouse.capacity}
              suffix="%"
              valueStyle={{ color: warehouse.capacity > 90 ? '#f5222d' : warehouse.capacity > 80 ? '#faad14' : '#52c41a' }}
              prefix={<HomeOutlined />}
            />
            <Progress 
              percent={warehouse.capacity} 
              size="small" 
              status={warehouse.capacity > 90 ? 'exception' : warehouse.capacity > 80 ? 'active' : 'normal'}
              style={{ marginTop: '8px' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('dashboard.activeWorkers')}
              value={warehouse.activeWorkers}
              valueStyle={{ color: '#1890ff' }}
              prefix={<TeamOutlined />}
            />
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              {t('dashboard.idleWorkers')}: {warehouse.idleWorkers}
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('dashboard.inboundTasks')}
              value={warehouse.inboundTasks}
              valueStyle={{ color: '#722ed1' }}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('dashboard.outboundTasks')}
              value={warehouse.outboundTasks}
              valueStyle={{ color: '#faad14' }}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {/* Environmental Conditions */}
      <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
        <Col xs={24} md={12}>
          <Card title={t('dashboard.environmentalConditions')}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#1890ff' }}>
                    {warehouse.temperature}
                  </div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    {t('dashboard.temperature')}
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: '600', color: '#52c41a' }}>
                    {warehouse.humidity}
                  </div>
                  <div style={{ fontSize: '14px', color: '#666' }}>
                    {t('dashboard.humidity')}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title={t('dashboard.warehouseCode')}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#1890ff',
                fontFamily: 'monospace',
                letterSpacing: '4px'
              }}>
                {warehouse.code}
              </div>
              <div style={{ fontSize: '16px', color: '#666', marginTop: '8px' }}>
                {warehouse.city} {t('dashboard.airport')}
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Worker Status Table */}
      <Card title={t('dashboard.workerStatus')} style={{ marginBottom: '24px' }}>
        <Table
          columns={workerColumns}
          dataSource={workerData}
          pagination={false}
          size="middle"
        />
      </Card>

      {/* Quick Actions */}
      <Card title={t('dashboard.warehouseQuickActions')}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Card 
              size="small" 
              hoverable 
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <ShoppingCartOutlined style={{ fontSize: 24, color: '#1890ff' }} />
              <div style={{ marginTop: '8px' }}>{t('dashboard.receiveGoods')}</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card 
              size="small" 
              hoverable 
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <CarOutlined style={{ fontSize: 24, color: '#52c41a' }} />
              <div style={{ marginTop: '8px' }}>{t('dashboard.pickOrders')}</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card 
              size="small" 
              hoverable 
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <TeamOutlined style={{ fontSize: 24, color: '#722ed1' }} />
              <div style={{ marginTop: '8px' }}>{t('dashboard.manageTeam')}</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card 
              size="small" 
              hoverable 
              style={{ textAlign: 'center', cursor: 'pointer' }}
            >
              <AlertOutlined style={{ fontSize: 24, color: '#faad14' }} />
              <div style={{ marginTop: '8px' }}>{t('dashboard.viewAlerts')}</div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default WarehouseDetailPage;
