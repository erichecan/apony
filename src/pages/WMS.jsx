import React from 'react';
import { Row, Col, Card, Typography, Statistic } from 'antd';
import { 
  ControlOutlined,
  LoginOutlined,
  LogoutOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

/**
 * Smart Warehouse Operations Blueprint - WMS Page
 * Updated: 2024-12-19 22:47:15
 * Purpose: Showcase warehouse operational solutions for multi-warehouse management
 */
const WMSPage = () => {
  const { t } = useLanguage();
  
  // Updated feature cards focusing on solving warehouse operational pains
  const featureCards = [
    {
      icon: <ControlOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('wms.unifiedMultiWarehouseInventory'),
      description: t('wms.unifiedMultiWarehouseInventoryDesc'),
      color: '#1890ff'
    },
    {
      icon: <LoginOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('wms.automatedInboundProcess'),
      description: t('wms.automatedInboundProcessDesc'),
      color: '#52c41a'
    },
    {
      icon: <LogoutOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('wms.optimizedPaperlessOutbound'),
      description: t('wms.optimizedPaperlessOutboundDesc'),
      color: '#722ed1'
    },
    {
      icon: <DashboardOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('wms.proactiveOperationsLaborManagement'),
      description: t('wms.proactiveOperationsLaborManagementDesc'),
      color: '#faad14'
    }
  ];

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('wms.smartWarehouseOperationsBlueprint')}
      </Title>

      {/* Updated Overview Paragraph */}
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

      {/* Updated Feature Cards - 2x2 Grid */}
      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
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

      {/* Multi-Warehouse Overview */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={16}>
          <Card title={t('wms.multiWarehouseOperationsOverview')}>
            <div style={{ 
              height: 300, 
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
                  {t('wms.unifiedMultiWarehouseManagementInterface')}
                </div>
                <div style={{ fontSize: 14, color: '#999' }}>
                  {t('wms.realTimeVisibilityAcrossAllFourWarehouseLocations')}
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title={t('wms.quickOperations')}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <LoginOutlined style={{ color: '#1890ff' }} />
                  <span>{t('wms.receiveGoods')}</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <LogoutOutlined style={{ color: '#52c41a' }} />
                  <span>{t('wms.pickOrders')}</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ControlOutlined style={{ color: '#722ed1' }} />
                  <span>{t('wms.inventoryCheck')}</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <DashboardOutlined style={{ color: '#faad14' }} />
                  <span>{t('wms.performanceReports')}</span>
                </div>
              </Card>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Updated Statistics */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('wms.totalSKUsAcrossAllWarehouses')}
              value={15420}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ControlOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('wms.averageSpaceUtilization')}
              value={78.5}
              precision={1}
              valueStyle={{ color: '#52c41a' }}
              prefix={<DashboardOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('wms.ordersProcessedToday')}
              value={342}
              valueStyle={{ color: '#722ed1' }}
              prefix={<LogoutOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title={t('wms.pickAccuracyRate')}
              value={99.2}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ControlOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WMSPage;
