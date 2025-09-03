import React, { useState } from 'react';
import { Layout, Menu, Avatar, Badge, Typography, Space } from 'antd';
import {
  DashboardOutlined,
  CarOutlined,
  ShopOutlined,
  GlobalOutlined,
  TeamOutlined,
  ContactsOutlined,
  DollarCircleOutlined,
  SettingOutlined,
  UserOutlined,
  BellOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  // Menu items configuration
  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: t('navigation.dashboard'),
    },
    {
      key: '/tms',
      icon: <CarOutlined />,
      label: t('navigation.transportation'),
    },
    {
      key: '/wms',
      icon: <ShopOutlined />,
      label: t('navigation.warehousing'),
    },
    {
      key: '/freight',
      icon: <GlobalOutlined />,
      label: t('navigation.freightForwarding'),
    },
    {
      key: '/fleet',
      icon: <TeamOutlined />,
      label: t('navigation.fleetManagement'),
    },
    {
      key: '/crm',
      icon: <ContactsOutlined />,
      label: t('navigation.customerRelationship'),
    },
    {
      key: '/billing',
      icon: <DollarCircleOutlined />,
      label: t('navigation.billingFinancial'),
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: t('navigation.systemSettings'),
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
        theme="dark"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        {/* Logo Section */}
        <div style={{ 
          height: 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderBottom: '1px solid #303030',
          marginBottom: 16
        }}>
          <Title 
            level={4} 
            style={{ 
              color: 'white', 
              margin: 0,
              fontSize: collapsed ? '14px' : '18px'
            }}
          >
            {collapsed ? 'LP' : 'LogiLink Pro'}
          </Title>
        </div>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 0 }}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'margin-left 0.2s' }}>
        <Header style={{ 
          padding: '0 24px', 
          background: '#fff', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            {t('common.welcome')}
          </Typography.Title>
          
          <Space size="large">
            <Badge count={5} size="small">
              <Avatar 
                icon={<BellOutlined />} 
                style={{ backgroundColor: '#1890ff', cursor: 'pointer' }}
              />
            </Badge>
            <Avatar 
              icon={<UserOutlined />} 
              style={{ backgroundColor: '#52c41a', cursor: 'pointer' }}
            />
          </Space>
        </Header>

        <Content style={{ 
          margin: '24px 16px', 
          padding: 24, 
          background: '#fff',
          borderRadius: 8,
          minHeight: 280,
          overflow: 'auto'
        }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
