import React from 'react';
import { Row, Col, Card, Typography, Breadcrumb } from 'antd';
import { 
  DatabaseOutlined, 
  SearchOutlined, 
  FilterOutlined,
  PlusOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Text, Title } = Typography;

/**
 * TMS Order Management Page
 * Created: 2024-12-19 23:25:00
 * Purpose: Detailed order management functionality description
 */
const TMSOrderPage = () => {
  const { t } = useLanguage();
  
  const orderFeatures = [
    {
      icon: <DatabaseOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('tms.orderCenter'),
      description: t('tms.orderCenterDesc')
    },
    {
      icon: <SearchOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('tms.orderSearch'),
      description: t('tms.orderSearchDesc')
    },
    {
      icon: <FilterOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('tms.orderFiltering'),
      description: t('tms.orderFilteringDesc')
    },
    {
      icon: <PlusOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('tms.orderCreation'),
      description: t('tms.orderCreationDesc')
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb style={{ marginBottom: '16px' }}>
        <Breadcrumb.Item>
          <Link to="/tms">{t('tms.title')}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{t('tms.orderManagement')}</Breadcrumb.Item>
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
        <Title level={2} style={{ margin: 0, marginBottom: '8px' }}>
          {t('tms.orderManagement')}
        </Title>
        <Text style={{ fontSize: '16px', color: '#666' }}>
          {t('tms.orderManagementSubtitle')}
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
          {t('tms.orderManagementOverview')}
        </Text>
      </div>

      {/* Feature Cards */}
      <Row gutter={[24, 24]}>
        {orderFeatures.map((feature, index) => (
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

      {/* Mock Order Data */}
      <Card title={t('tms.recentOrders')} style={{ marginTop: '32px' }}>
        <div style={{ 
          height: 200, 
          background: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8
        }}>
          <div style={{ textAlign: 'center' }}>
            <DatabaseOutlined style={{ fontSize: 64, color: '#1890ff' }} />
            <div style={{ marginTop: 16, fontSize: 18, color: '#666' }}>
              {t('tms.orderDataInterface')}
            </div>
            <div style={{ fontSize: 14, color: '#999' }}>
              {t('tms.orderDataDescription')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TMSOrderPage;
