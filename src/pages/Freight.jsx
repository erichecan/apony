import React from 'react';
import { Row, Col, Card, Typography, Statistic, Tag } from 'antd';
import { 
  GlobalOutlined, 
  CarOutlined, 
  RocketOutlined, 
  TruckOutlined,
  FileTextOutlined,
  DollarOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

const FreightPage = () => {
  const { t } = useLanguage();
  
  const featureCards = [
    {
      icon: <CarOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('freight.oceanFreight'),
      description: t('freight.oceanFreightDesc'),
      color: '#1890ff'
    },
    {
      icon: <RocketOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('freight.airFreight'),
      description: t('freight.airFreightDesc'),
      color: '#52c41a'
    },
    {
      icon: <TruckOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('freight.landTransport'),
      description: t('freight.landTransportDesc'),
      color: '#722ed1'
    },
    {
      icon: <FileTextOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('freight.customsClearance'),
      description: t('freight.customsClearanceDesc'),
      color: '#faad14'
    },
    {
      icon: <GlobalOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
      title: t('freight.globalNetwork'),
      description: t('freight.globalNetworkDesc'),
      color: '#13c2c2'
    },
    {
      icon: <DollarOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
      title: t('freight.costOptimization'),
      description: t('freight.costOptimizationDesc'),
      color: '#eb2f96'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
      title: t('freight.transitTimeManagement'),
      description: t('freight.transitTimeManagementDesc'),
      color: '#f5222d'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: t('freight.cargoInsurance'),
      description: t('freight.cargoInsuranceDesc'),
      color: '#fa8c16'
    }
  ];

  const activeShipments = [
    { id: 'FF-001', origin: 'Shanghai', destination: 'Los Angeles', status: 'In Transit', mode: 'Ocean', eta: '2024-01-15' },
    { id: 'FF-002', origin: 'Frankfurt', destination: 'New York', status: 'Customs Clearance', mode: 'Air', eta: '2024-01-12' },
    { id: 'FF-003', origin: 'Toronto', destination: 'Mexico City', status: 'In Transit', mode: 'Land', eta: '2024-01-18' },
    { id: 'FF-004', origin: 'Dubai', destination: 'London', status: 'Scheduled', mode: 'Air', eta: '2024-01-20' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Transit': return 'blue';
      case 'Customs Clearance': return 'orange';
      case 'Scheduled': return 'green';
      case 'Delivered': return 'green';
      default: return 'default';
    }
  };

  const getModeIcon = (mode) => {
    switch (mode) {
      case 'Ocean': return <CarOutlined style={{ color: '#1890ff' }} />;
      case 'Air': return <RocketOutlined style={{ color: '#52c41a' }} />;
      case 'Land': return <TruckOutlined style={{ color: '#722ed1' }} />;
      default: return <GlobalOutlined />;
    }
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('freight.title')}
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

      {/* Active Shipments */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={16}>
          <Card title={t('freight.activeShipments')} extra={<a href="#">{t('common.viewAll')}</a>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {activeShipments.map((shipment) => (
                <Card 
                  key={shipment.id} 
                  size="small" 
                  hoverable 
                  style={{ cursor: 'pointer' }}
                >
                  <Row align="middle" gutter={16}>
                    <Col span={2}>
                      {getModeIcon(shipment.mode)}
                    </Col>
                    <Col span={6}>
                      <div style={{ fontWeight: 'bold' }}>{shipment.id}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        {shipment.origin} → {shipment.destination}
                      </div>
                    </Col>
                    <Col span={4}>
                      <Tag color={getStatusColor(shipment.status)}>
                        {shipment.status}
                      </Tag>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>ETA</div>
                      <div>{shipment.eta}</div>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Mode</div>
                      <div>{shipment.mode}</div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'right' }}>
                      <a href="#">Track</a>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title={t('settings.quickActions')}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <FileTextOutlined style={{ color: '#1890ff' }} />
                  <span>{t('freight.newShipment')}</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <DollarOutlined style={{ color: '#52c41a' }} />
                  <span>{t('freight.getQuote')}</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ClockCircleOutlined style={{ color: '#722ed1' }} />
                  <span>{t('freight.trackShipment')}</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <SafetyCertificateOutlined style={{ color: '#faad14' }} />
                  <span>{t('freight.insurance')}</span>
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
              title={t('freight.activeShipmentsCount')}
              value={156}
              valueStyle={{ color: '#1890ff' }}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('freight.countriesServed')}
              value={47}
              valueStyle={{ color: '#52c41a' }}
              prefix={<GlobalOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('freight.onTimeRate')}
              value={96.8}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ClockCircleOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('freight.monthlyVolume')}
              value={2847}
              valueStyle={{ color: '#722ed1' }}
              prefix={<TruckOutlined />}
              suffix="TEU"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FreightPage;
