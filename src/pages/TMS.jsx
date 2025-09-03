import React from 'react';
import { Row, Col, Card, Typography, Space, Statistic } from 'antd';
import { 
  ShoppingCartOutlined, 
  CarOutlined, 
  MobileOutlined, 
  EyeOutlined,
  CompassOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom truck icon
const truckIcon = L.divIcon({
  html: '🚛',
  className: 'custom-truck-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

const TMSPage = () => {
  const { t } = useLanguage();
  
  // Mock truck locations around Toronto
  const truckLocations = [
    { id: 1, lat: 43.6532, lng: -79.3832, name: 'Truck T-001', status: 'In Transit', driver: 'John Smith' },
    { id: 2, lat: 43.6519, lng: -79.3817, name: 'Truck T-002', status: 'Loading', driver: 'Sarah Johnson' },
    { id: 3, lat: 43.6548, lng: -79.3845, name: 'Truck T-003', status: 'Delivering', driver: 'Mike Wilson' },
    { id: 4, lat: 43.6525, lng: -79.3860, name: 'Truck T-004', status: 'Returning', driver: 'Lisa Brown' },
  ];

  const featureCards = [
    {
      icon: <ShoppingCartOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('tms.orderCenter'),
      description: t('tms.orderCenterDesc'),
      color: '#1890ff'
    },
    {
      icon: <CompassOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('tms.smartDispatch'),
      description: t('tms.smartDispatchDesc'),
      color: '#52c41a'
    },
    {
      icon: <MobileOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('tms.driverMobile'),
      description: t('tms.driverMobileDesc'),
      color: '#722ed1'
    },
    {
      icon: <EyeOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('tms.customerTracking'),
      description: t('tms.customerTrackingDesc'),
      color: '#faad14'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
      title: t('tms.realTimeMonitoring'),
      description: t('tms.realTimeMonitoringDesc'),
      color: '#13c2c2'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
      title: t('tms.complianceManagement'),
      description: t('tms.complianceManagementDesc'),
      color: '#eb2f96'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
      title: t('tms.performanceAnalytics'),
      description: t('tms.performanceAnalyticsDesc'),
      color: '#f5222d'
    },
    {
      icon: <CarOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: t('tms.fleetOptimization'),
      description: t('tms.fleetOptimizationDesc'),
      color: '#fa8c16'
    }
  ];

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('tms.title')}
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

      {/* Live Fleet Map */}
                <Card title={t('tms.liveFleetTracking')} style={{ marginBottom: 24 }}>
        <div style={{ height: 500, borderRadius: 8, overflow: 'hidden' }}>
          <MapContainer
            center={[43.6532, -79.3832]}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {truckLocations.map((truck) => (
              <Marker
                key={truck.id}
                position={[truck.lat, truck.lng]}
                icon={truckIcon}
              >
                <Popup>
                  <div>
                    <h4>{truck.name}</h4>
                    <p><strong>Status:</strong> {truck.status}</p>
                    <p><strong>Driver:</strong> {truck.driver}</p>
                    <p><strong>Location:</strong> {truck.lat.toFixed(4)}, {truck.lng.toFixed(4)}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Card>

      {/* Quick Stats */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('tms.activeTrucks')}
              value={42}
              valueStyle={{ color: '#52c41a' }}
              prefix={<CarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('tms.todaysDeliveries')}
              value={156}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('tms.onTimeRate')}
              value={94.2}
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
              title={t('tms.fuelEfficiency')}
              value={8.5}
              precision={1}
              valueStyle={{ color: '#faad14' }}
              prefix={<BarChartOutlined />}
              suffix="mpg"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TMSPage;
