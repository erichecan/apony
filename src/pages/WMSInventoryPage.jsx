import React from 'react';
import { Row, Col, Card, Typography, Breadcrumb } from 'antd';
import { 
  ControlOutlined, 
  SearchOutlined, 
  FilterOutlined,
  BarChartOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Text, Title } = Typography;

/**
 * WMS Inventory Management Page
 * Created: 2024-12-19 23:50:00
 * Purpose: Detailed inventory management functionality description
 */
const WMSInventoryPage = () => {
  const { t } = useLanguage();
  
  const inventoryFeatures = [
    {
      icon: <ControlOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('wms.unifiedInventory'),
      description: t('wms.unifiedInventoryDesc')
    },
    {
      icon: <SearchOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('wms.realTimeSearch'),
      description: t('wms.realTimeSearchDesc')
    },
    {
      icon: <FilterOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('wms.multiWarehouseFilter'),
      description: t('wms.multiWarehouseFilterDesc')
    },
    {
      icon: <BarChartOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('wms.inventoryAnalytics'),
      description: t('wms.inventoryAnalyticsDesc')
    }
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumb style={{ marginBottom: '16px' }}>
        <Breadcrumb.Item>
          <Link to="/wms">{t('wms.title')}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{t('wms.unifiedMultiWarehouseInventory')}</Breadcrumb.Item>
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
          {t('wms.unifiedMultiWarehouseInventory')}
        </Title>
        <Text style={{ fontSize: '16px', color: '#666' }}>
          {t('wms.inventorySubtitle')}
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
          {t('wms.inventoryOverview')}
        </Text>
      </div>

      {/* Feature Cards */}
      <Row gutter={[24, 24]}>
        {inventoryFeatures.map((feature, index) => (
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

      {/* Mock Inventory Data */}
      <Card title={t('wms.inventoryData')} style={{ marginTop: '32px' }}>
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
            <ControlOutlined style={{ fontSize: 64, color: '#1890ff' }} />
            <div style={{ marginTop: 16, fontSize: 18, color: '#666' }}>
              {t('wms.inventoryDataInterface')}
            </div>
            <div style={{ fontSize: 14, color: '#999' }}>
              {t('wms.inventoryDataDescription')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WMSInventoryPage;
