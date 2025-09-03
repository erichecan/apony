import React from 'react';
import { Row, Col, Card, Typography, Button, Select } from 'antd';
import { 
  CarOutlined, 
  AimOutlined, 
  MobileOutlined, 
  LinkOutlined,
  ArrowRightOutlined,
  SwapOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Text, Title } = Typography;

/**
 * TMS Overview Page Component
 * Created: 2024-12-19 23:20:00
 * Purpose: TMS module overview page - first level navigation
 */
const TMSOverviewPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // TMS module overview cards
  const moduleCards = [
    {
      icon: <CarOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('tms.orderManagement'),
      description: t('tms.orderManagementDesc'),
      path: '/tms/orders',
      color: '#1890ff'
    },
    {
      icon: <AimOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('tms.dispatchSystem'),
      description: t('tms.dispatchSystemDesc'),
      path: '/tms/dispatch',
      color: '#52c41a'
    },
    {
      icon: <MobileOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('tms.driverApp'),
      description: t('tms.driverAppDesc'),
      path: '/tms/driver-app',
      color: '#722ed1'
    },
    {
      icon: <LinkOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('tms.trackingPortal'),
      description: t('tms.trackingPortalDesc'),
      path: '/tms/tracking',
      color: '#faad14'
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div style={{ padding: '24px' }}>
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
        <Title level={2} style={{ margin: 0, marginBottom: '8px' }}>
          {t('tms.title')}
        </Title>
        <Text style={{ fontSize: '16px', color: '#666' }}>
          {t('tms.overviewSubtitle')}
        </Text>
      </Card>

      {/* Overview Description */}
      <div style={{ 
        background: '#f6f8fa', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '32px',
        border: '1px solid #e8e8e8'
      }}>
        <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          {t('tms.overviewDescription')}
        </Text>
      </div>

      {/* Warehouse Navigation */}
      <Card style={{ marginBottom: '24px' }}>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '16px', 
          borderRadius: '8px',
          border: '1px solid #e8e8e8'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <SwapOutlined style={{ color: '#1890ff', fontSize: '16px' }} />
            <span style={{ fontWeight: '500', fontSize: '14px', color: '#666' }}>
              {t('dashboard.switchWarehouse')}:
            </span>
            <Select
              defaultValue="all"
              style={{ width: 300 }}
              size="middle"
              options={[
                { value: 'all', label: t('dashboard.all') },
                { value: '1', label: t('dashboard.warehouse1YYZ') },
                { value: '2', label: t('dashboard.warehouse2YVR') },
                { value: '3', label: t('dashboard.warehouse3YYC') },
                { value: '4', label: t('dashboard.warehouse4YUL') }
              ]}
              placeholder={t('dashboard.selectWarehouse')}
            />
          </div>
        </div>
      </Card>

      {/* Module Cards - Clickable to navigate to sub-pages */}
      <Row gutter={[24, 24]}>
        {moduleCards.map((module, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              hoverable
              style={{
                height: '100%',
                border: '1px solid #e8e8e8',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              bodyStyle={{ 
                padding: '24px',
                textAlign: 'center'
              }}
              onClick={() => handleCardClick(module.path)}
            >
              <div style={{ marginBottom: '16px' }}>
                {module.icon}
              </div>
              <h3 style={{ 
                marginBottom: '12px', 
                fontSize: '18px',
                fontWeight: '600',
                color: '#262626'
              }}>
                {module.title}
              </h3>
              <Text style={{ 
                fontSize: '14px', 
                lineHeight: '1.6',
                color: '#595959',
                marginBottom: '16px',
                display: 'block'
              }}>
                {module.description}
              </Text>
              <Button 
                type="primary" 
                size="small"
                icon={<ArrowRightOutlined />}
                style={{ 
                  backgroundColor: module.color,
                  borderColor: module.color
                }}
              >
                {t('common.viewDetails')}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Quick Stats */}
      <Row gutter={[16, 16]} style={{ marginTop: '32px' }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <CarOutlined style={{ fontSize: 24, color: '#1890ff' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('tms.activeOrders')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                156 {t('common.orders')}
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <AimOutlined style={{ fontSize: 24, color: '#52c41a' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('tms.activeDrivers')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                42 {t('common.drivers')}
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <MobileOutlined style={{ fontSize: 24, color: '#722ed1' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('tms.onTimeRate')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                94.2%
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <LinkOutlined style={{ fontSize: 24, color: '#faad14' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('tms.todayDeliveries')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                89 {t('common.deliveries')}
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TMSOverviewPage;
