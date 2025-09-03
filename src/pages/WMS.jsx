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
 * Updated: 2024-12-19 14:38:15
 * Purpose: Showcase warehouse operational solutions for multi-warehouse management
 */
const WMSPage = () => {
  const { t } = useLanguage();
  
  // Updated feature cards focusing on solving warehouse operational pains
  const featureCards = [
    {
      icon: <ControlOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: 'Unified Multi-Warehouse Inventory',
      description: 'Provides a single, real-time view of all inventory across all four warehouses. Search any SKU and instantly see its location, quantity, and status, eliminating the need for manual Excel consolidation.',
      color: '#1890ff'
    },
    {
      icon: <LoginOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: 'Automated Inbound Process',
      description: 'Features a supplier booking portal, PDA/mobile app for scan-to-receive, and AI-powered slotting recommendations. This standardizes receiving and ensures goods are stored optimally from the moment they arrive.',
      color: '#52c41a'
    },
    {
      icon: <LogoutOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: 'Optimized & Paperless Outbound',
      description: 'Includes intelligent order routing to select the best warehouse for fulfillment. The system generates optimized picking paths for workers on their mobile app, eliminating paper and minimizing errors.',
      color: '#722ed1'
    },
    {
      icon: <DashboardOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: 'Proactive Operations & Labor Management',
      description: 'A manager\'s dashboard with real-time KPIs on worker efficiency, warehouse throughput, and potential bottlenecks. Proactive alerts for low stock or high volume allow managers to solve problems before they happen.',
      color: '#faad14'
    }
  ];

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        Smart Warehouse Operations Blueprint
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
          This module transforms our warehouses from manual-heavy cost centers into efficient, data-driven fulfillment hubs. It empowers a single manager to oversee multiple locations with precision and ease.
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
          <Card title="Multi-Warehouse Operations Overview">
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
                  Unified Multi-Warehouse Management Interface
                </div>
                <div style={{ fontSize: 14, color: '#999' }}>
                  Real-time visibility across all four warehouse locations
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Quick Operations">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <LoginOutlined style={{ color: '#1890ff' }} />
                  <span>Receive Goods</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <LogoutOutlined style={{ color: '#52c41a' }} />
                  <span>Pick Orders</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ControlOutlined style={{ color: '#722ed1' }} />
                  <span>Inventory Check</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <DashboardOutlined style={{ color: '#faad14' }} />
                  <span>Performance Reports</span>
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
              title="Total SKUs Across All Warehouses"
              value={15420}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ControlOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Average Space Utilization"
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
              title="Orders Processed Today"
              value={342}
              valueStyle={{ color: '#722ed1' }}
              prefix={<LogoutOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Pick Accuracy Rate"
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
