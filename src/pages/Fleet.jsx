import React from 'react';
import { Row, Col, Card, Typography, Statistic, Progress, Tag } from 'antd';
import { 
  TeamOutlined, 
  CarOutlined, 
  ToolOutlined, 
  SafetyCertificateOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

const FleetPage = () => {
  const { t } = useLanguage();
  
  const featureCards = [
    {
      icon: <CarOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('fleet.vehicleManagement'),
      description: t('fleet.vehicleManagementDesc'),
      color: '#1890ff'
    },
    {
      icon: <TeamOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('fleet.driverManagement'),
      description: t('fleet.driverManagementDesc'),
      color: '#52c41a'
    },
    {
      icon: <ToolOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('fleet.maintenanceScheduling'),
      description: t('fleet.maintenanceSchedulingDesc'),
      color: '#722ed1'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('fleet.safetyCompliance'),
      description: t('fleet.safetyComplianceDesc'),
      color: '#faad14'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
      title: t('fleet.performanceAnalytics'),
      description: t('fleet.performanceAnalyticsDesc'),
      color: '#13c2c2'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
      title: t('fleet.routeOptimization'),
      description: t('fleet.routeOptimizationDesc'),
      color: '#eb2f96'
    },
    {
      icon: <DollarOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
      title: t('fleet.costManagement'),
      description: t('fleet.costManagementDesc'),
      color: '#f5222d'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: t('fleet.environmentalImpact'),
      description: t('fleet.environmentalImpactDesc'),
      color: '#fa8c16'
    }
  ];

  const fleetStatus = [
    { id: 'T-001', type: 'Truck', status: 'Active', driver: 'John Smith', location: 'Toronto', fuel: 85, health: 92 },
    { id: 'T-002', type: 'Truck', status: 'Maintenance', driver: 'Sarah Johnson', location: 'Vancouver', fuel: 0, health: 45 },
    { id: 'T-003', type: 'Van', status: 'Active', driver: 'Mike Wilson', location: 'Montreal', fuel: 67, health: 88 },
    { id: 'T-004', type: 'Truck', status: 'Active', driver: 'Lisa Brown', location: 'Calgary', fuel: 92, health: 95 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'green';
      case 'Maintenance': return 'orange';
      case 'Out of Service': return 'red';
      default: return 'default';
    }
  };

  const getHealthColor = (health) => {
    if (health >= 80) return '#52c41a';
    if (health >= 60) return '#faad14';
    return '#f5222d';
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('fleet.title')}
      </Title>

      {/* Feature Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
        {featureCards.map((feature, index) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={index}>
            <Card
              hoverable
              style={{
                height: '100%',
                borderLeft: `4px solid ${feature.color}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              bodyStyle={{ padding: '20px' }}
            >
              <div style={{ textAlign: 'center' }}>
                {feature.icon}
                <Title level={4} style={{ marginTop: 16, marginBottom: 12 }}>
                  {feature.title}
                </Title>
                <Text type="secondary" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                  {feature.description}
                </Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Fleet Status */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={16}>
          <Card title={t('fleet.fleetStatus')} extra={<a href="#">{t('common.viewAll')}</a>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {fleetStatus.map((vehicle) => (
                <Card 
                  key={vehicle.id} 
                  size="small" 
                  hoverable 
                  style={{ cursor: 'pointer' }}
                >
                  <Row align="middle" gutter={16}>
                    <Col span={3}>
                      <CarOutlined style={{ fontSize: 20, color: '#1890ff' }} />
                      <div style={{ fontSize: '12px', color: '#666' }}>{vehicle.type}</div>
                    </Col>
                    <Col span={3}>
                      <div style={{ fontWeight: 'bold' }}>{vehicle.id}</div>
                      <Tag color={getStatusColor(vehicle.status)} size="small">
                        {vehicle.status}
                      </Tag>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Driver</div>
                      <div>{vehicle.driver}</div>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Location</div>
                      <div>{vehicle.location}</div>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Fuel Level</div>
                      <Progress 
                        percent={vehicle.fuel} 
                        size="small" 
                        strokeColor={vehicle.fuel > 20 ? '#52c41a' : '#f5222d'}
                      />
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Vehicle Health</div>
                      <Progress 
                        percent={vehicle.health} 
                        size="small" 
                        strokeColor={getHealthColor(vehicle.health)}
                      />
                    </Col>
                    <Col span={2} style={{ textAlign: 'right' }}>
                      <a href="#">Details</a>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Quick Actions">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CarOutlined style={{ color: '#1890ff' }} />
                  <span>Add Vehicle</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <TeamOutlined style={{ color: '#52c41a' }} />
                  <span>Hire Driver</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ToolOutlined style={{ color: '#722ed1' }} />
                  <span>Schedule Maintenance</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <BarChartOutlined style={{ color: '#faad14' }} />
                  <span>Generate Reports</span>
                </div>
              </Card>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Statistics */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Vehicles"
              value={156}
              valueStyle={{ color: '#1890ff' }}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Drivers"
              value={142}
              valueStyle={{ color: '#52c41a' }}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Fuel Efficiency"
              value={8.7}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<DollarOutlined />}
              suffix="mpg"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Maintenance Due"
              value={12}
              valueStyle={{ color: '#faad14' }}
              prefix={<ToolOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FleetPage;
