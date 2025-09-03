import React from 'react';
import { Row, Col, Card, Typography, Statistic, Avatar, Tag, Progress } from 'antd';
import { 
  ContactsOutlined, 
  UserOutlined, 
  DollarOutlined, 
  MessageOutlined,
  BarChartOutlined,
  TeamOutlined,
  CalendarOutlined,
  StarOutlined
} from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

const CRMPage = () => {
  const { t } = useLanguage();
  
  const featureCards = [
    {
      icon: <UserOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('crm.customerProfiles'),
      description: t('crm.customerProfilesDesc'),
      color: '#1890ff'
    },
    {
      icon: <DollarOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('crm.salesPipeline'),
      description: t('crm.salesPipelineDesc'),
      color: '#52c41a'
    },
    {
      icon: <MessageOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('crm.communicationHub'),
      description: t('crm.communicationHubDesc'),
      color: '#722ed1'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('crm.analyticsReporting'),
      description: t('crm.analyticsReportingDesc'),
      color: '#faad14'
    },
    {
      icon: <TeamOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
      title: t('crm.leadManagement'),
      description: t('crm.leadManagementDesc'),
      color: '#13c2c2'
    },
    {
      icon: <CalendarOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
      title: t('crm.activityManagement'),
      description: t('crm.activityManagementDesc'),
      color: '#eb2f96'
    },
    {
      icon: <StarOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
      title: t('crm.customerSuccess'),
      description: t('crm.customerSuccessDesc'),
      color: '#f5222d'
    },
    {
      icon: <ContactsOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: t('crm.accountManagement'),
      description: t('crm.accountManagementDesc'),
      color: '#fa8c16'
    }
  ];

  const recentCustomers = [
    { id: 1, name: 'Acme Corp', contact: 'John Smith', email: 'john@acme.com', status: 'Active', value: '$125,000', satisfaction: 95 },
    { id: 2, name: 'TechStart Inc', contact: 'Sarah Johnson', email: 'sarah@techstart.com', status: 'Prospect', value: '$75,000', satisfaction: 88 },
    { id: 3, name: 'Global Logistics', contact: 'Mike Wilson', email: 'mike@globallog.com', status: 'Active', value: '$200,000', satisfaction: 92 },
    { id: 4, name: 'Retail Plus', contact: 'Lisa Brown', email: 'lisa@retailplus.com', status: 'Lead', value: '$50,000', satisfaction: 85 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'green';
      case 'Prospect': return 'blue';
      case 'Lead': return 'orange';
      case 'Inactive': return 'red';
      default: return 'default';
    }
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('crm.title')}
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

      {/* Recent Customers */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Recent Customers" extra={<a href="#">View All Customers</a>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {recentCustomers.map((customer) => (
                <Card 
                  key={customer.id} 
                  size="small" 
                  hoverable 
                  style={{ cursor: 'pointer' }}
                >
                  <Row align="middle" gutter={16}>
                    <Col span={2}>
                      <Avatar size="large" icon={<UserOutlined />} />
                    </Col>
                    <Col span={4}>
                      <div style={{ fontWeight: 'bold' }}>{customer.name}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{customer.contact}</div>
                    </Col>
                    <Col span={5}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Email</div>
                      <div style={{ fontSize: '12px' }}>{customer.email}</div>
                    </Col>
                    <Col span={3}>
                      <Tag color={getStatusColor(customer.status)}>
                        {customer.status}
                      </Tag>
                    </Col>
                    <Col span={3}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Value</div>
                      <div style={{ fontWeight: 'bold', color: '#52c41a' }}>{customer.value}</div>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Satisfaction</div>
                      <Progress 
                        percent={customer.satisfaction} 
                        size="small" 
                        strokeColor={customer.satisfaction >= 90 ? '#52c41a' : customer.satisfaction >= 80 ? '#faad14' : '#f5222d'}
                      />
                    </Col>
                    <Col span={3} style={{ textAlign: 'right' }}>
                      <a href="#">View</a>
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Quick Actions">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <UserOutlined style={{ color: '#1890ff' }} />
                  <span>Add Customer</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <DollarOutlined style={{ color: '#52c41a' }} />
                  <span>New Opportunity</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <MessageOutlined style={{ color: '#722ed1' }} />
                  <span>Send Email</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CalendarOutlined style={{ color: '#faad14' }} />
                  <span>Schedule Meeting</span>
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
              title="Total Customers"
              value={2847}
              valueStyle={{ color: '#1890ff' }}
              prefix={<ContactsOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Opportunities"
              value={156}
              valueStyle={{ color: '#52c41a' }}
              prefix={<DollarOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Lead Conversion"
              value={23.5}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<BarChartOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Avg Satisfaction"
              value={91.2}
              precision={1}
              valueStyle={{ color: '#faad14' }}
              prefix={<StarOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CRMPage;
