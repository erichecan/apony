import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { 
  DatabaseOutlined, 
  AimOutlined, 
  MobileOutlined, 
  LinkOutlined 
} from '@ant-design/icons';

const { Text, Title } = Typography;

/**
 * TMS Module Page Component
 * Updated: 2024-12-19 22:45:30
 * Purpose: Descriptive page showcasing TMS sub-features for demonstration purposes
 */
const TMSPage = () => {
  const { t } = useLanguage();
  
  // Feature cards data - non-clickable descriptive cards
  const featureCards = [
    {
      icon: <DatabaseOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('tms.orderCenter'),
      description: t('tms.orderCenterDesc')
    },
    {
      icon: <AimOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('tms.smartDispatch'),
      description: t('tms.smartDispatchDesc')
    },
    {
      icon: <MobileOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('tms.driverMobile'),
      description: t('tms.driverMobileDesc')
    },
    {
      icon: <LinkOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('tms.customerTracking'),
      description: t('tms.customerTrackingDesc')
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Custom Page Header */}
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
          {t('tms.coreFunctionalityBlueprint')}
        </Text>
      </Card>

      {/* Overview Paragraph */}
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

      {/* Feature Showcase Cards - 2x2 Grid */}
      <Row gutter={[24, 24]}>
        {featureCards.map((feature, index) => (
          <Col xs={24} sm={12} key={index}>
            <Card
              style={{
                height: '100%',
                border: '1px solid #e8e8e8',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
              bodyStyle={{ 
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                marginBottom: '12px', 
                fontSize: '18px',
                fontWeight: '600',
                color: '#262626'
              }}>
                {feature.title}
              </h3>
              <Text style={{ 
                fontSize: '14px', 
                lineHeight: '1.6',
                color: '#595959'
              }}>
                {feature.description}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TMSPage;
