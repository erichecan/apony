import React from 'react';
import { Row, Col, Card, Typography, Button, Statistic } from 'antd';
import { 
  ControlOutlined,
  LoginOutlined,
  LogoutOutlined,
  DashboardOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

/**
 * WMS Overview Page Component
 * Updated: 2024-12-19 23:45:00
 * Purpose: WMS module overview page - first level navigation
 */
const WMSPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  // WMS module overview cards
  const moduleCards = [
    {
      icon: <ControlOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('wms.unifiedMultiWarehouseInventory'),
      description: t('wms.unifiedMultiWarehouseInventoryDesc'),
      path: '/wms/inventory',
      color: '#1890ff'
    },
    {
      icon: <LoginOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('wms.automatedInboundProcess'),
      description: t('wms.automatedInboundProcessDesc'),
      path: '/wms/inbound',
      color: '#52c41a'
    },
    {
      icon: <LogoutOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('wms.optimizedPaperlessOutbound'),
      description: t('wms.optimizedPaperlessOutboundDesc'),
      path: '/wms/outbound',
      color: '#722ed1'
    },
    {
      icon: <DashboardOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('wms.proactiveOperationsLaborManagement'),
      description: t('wms.proactiveOperationsLaborManagementDesc'),
      path: '/wms/operations',
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
          {t('wms.title')}
        </Title>
        <Text style={{ fontSize: '16px', color: '#666' }}>
          {t('wms.overviewSubtitle')}
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
          {t('wms.overviewDescription')}
        </Text>
      </div>

      {/* Module Cards - Clickable to navigate to sub-pages */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
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
              <ControlOutlined style={{ fontSize: 24, color: '#1890ff' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('wms.totalSKUs')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                15,420 {t('common.skus')}
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <LoginOutlined style={{ fontSize: 24, color: '#52c41a' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('wms.spaceUtilization')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                78.5%
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <LogoutOutlined style={{ fontSize: 24, color: '#722ed1' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('wms.ordersProcessed')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                342 {t('common.orders')}
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <DashboardOutlined style={{ fontSize: 24, color: '#faad14' }} />
              <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '600' }}>
                {t('wms.pickAccuracy')}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                99.2%
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WMSPage;
