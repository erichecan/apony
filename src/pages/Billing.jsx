import React from 'react';
import { Row, Col, Card, Typography, Statistic, Tag, Progress, Button } from 'antd';
import { 
  DollarCircleOutlined, 
  FileTextOutlined, 
  CreditCardOutlined, 
  BarChartOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

const BillingPage = () => {
  const { t } = useLanguage();
  
  const featureCards = [
    {
      icon: <FileTextOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('billing.invoiceManagement'),
      description: t('billing.invoiceManagementDesc'),
      color: '#1890ff'
    },
    {
      icon: <CreditCardOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('billing.paymentProcessing'),
      description: t('billing.paymentProcessingDesc'),
      color: '#52c41a'
    },
    {
      icon: <BarChartOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('billing.financialAnalytics'),
      description: t('billing.financialAnalyticsDesc'),
      color: '#722ed1'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('billing.paymentTracking'),
      description: t('billing.paymentTrackingDesc'),
      color: '#faad14'
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
      title: t('billing.collectionsManagement'),
      description: t('billing.collectionsManagementDesc'),
      color: '#13c2c2'
    },
    {
      icon: <DollarCircleOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
      title: t('billing.revenueRecognition'),
      description: t('billing.revenueRecognitionDesc'),
      color: '#eb2f96'
    },
    {
      icon: <ReloadOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
      title: t('billing.recurringBilling'),
      description: t('billing.recurringBillingDesc'),
      color: '#f5222d'
    },
    {
      icon: <ExclamationCircleOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: t('billing.taxManagement'),
      description: t('billing.taxManagementDesc'),
      color: '#fa8c16'
    }
  ];

  const recentInvoices = [
    { id: 'INV-001', customer: 'Acme Corp', amount: '$12,500', status: 'Paid', dueDate: '2024-01-10', daysOverdue: 0 },
    { id: 'INV-002', customer: 'TechStart Inc', amount: '$7,800', status: 'Overdue', dueDate: '2024-01-05', daysOverdue: 5 },
    { id: 'INV-003', customer: 'Global Logistics', amount: '$25,000', status: 'Pending', dueDate: '2024-01-15', daysOverdue: 0 },
    { id: 'INV-004', customer: 'Retail Plus', amount: '$5,200', status: 'Draft', dueDate: '2024-01-20', daysOverdue: 0 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return 'green';
      case 'Pending': return 'blue';
      case 'Overdue': return 'red';
      case 'Draft': return 'default';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Paid': return <CheckCircleOutlined style={{ color: '#52c41a' }} />;
      case 'Pending': return <ClockCircleOutlined style={{ color: '#1890ff' }} />;
      case 'Overdue': return <ExclamationCircleOutlined style={{ color: '#f5222d' }} />;
      case 'Draft': return <FileTextOutlined style={{ color: '#666' }} />;
      default: return <FileTextOutlined />;
    }
  };

  return (
    <div>
      <Title level={2} style={{ marginBottom: 24 }}>
        {t('billing.title')}
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

      {/* Recent Invoices */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Recent Invoices" extra={<a href="#">View All Invoices</a>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {recentInvoices.map((invoice) => (
                <Card 
                  key={invoice.id} 
                  size="small" 
                  hoverable 
                  style={{ cursor: 'pointer' }}
                >
                  <Row align="middle" gutter={16}>
                    <Col span={2}>
                      {getStatusIcon(invoice.status)}
                    </Col>
                    <Col span={4}>
                      <div style={{ fontWeight: 'bold' }}>{invoice.id}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{invoice.customer}</div>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Amount</div>
                      <div style={{ fontWeight: 'bold', color: '#52c41a' }}>{invoice.amount}</div>
                    </Col>
                    <Col span={4}>
                      <Tag color={getStatusColor(invoice.status)}>
                        {invoice.status}
                      </Tag>
                      {invoice.daysOverdue > 0 && (
                        <div style={{ fontSize: '12px', color: '#f5222d', marginTop: 4 }}>
                          {invoice.daysOverdue} days overdue
                        </div>
                      )}
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Due Date</div>
                      <div>{invoice.dueDate}</div>
                    </Col>
                    <Col span={4}>
                      <div style={{ fontSize: '12px', color: '#666' }}>Actions</div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                        <Button size="small" type="link">View</Button>
                        {invoice.status === 'Draft' && (
                          <Button size="small" type="link">Edit</Button>
                        )}
                        {invoice.status === 'Pending' && (
                          <Button size="small" type="link">Send</Button>
                        )}
                      </div>
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
                  <FileTextOutlined style={{ color: '#1890ff' }} />
                  <span>Create Invoice</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <CreditCardOutlined style={{ color: '#52c41a' }} />
                  <span>Process Payment</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <BarChartOutlined style={{ color: '#722ed1' }} />
                  <span>Financial Report</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ClockCircleOutlined style={{ color: '#faad14' }} />
                  <span>Payment Reminders</span>
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
              title="Total Revenue"
              value={2847500}
              precision={0}
              valueStyle={{ color: '#52c41a' }}
              prefix={<DollarCircleOutlined />}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Outstanding Amount"
              value={156800}
              precision={0}
              valueStyle={{ color: '#faad14' }}
              prefix={<ExclamationCircleOutlined />}
              suffix="$"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Payment Rate"
              value={94.2}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<CheckCircleOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Invoices"
              value={89}
              valueStyle={{ color: '#1890ff' }}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BillingPage;
