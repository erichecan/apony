import React from 'react';
import { Row, Col, Card, Typography, Statistic, Switch, Button, Space, Select } from 'antd';
import { 
  SettingOutlined, 
  UserOutlined, 
  SecurityScanOutlined, 
  DatabaseOutlined,
  BellOutlined,
  GlobalOutlined,
  ToolOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

const SettingsPage = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  
  const featureCards = [
    {
      icon: <UserOutlined style={{ fontSize: 32, color: '#1890ff' }} />,
      title: t('settings.userManagement'),
      description: t('settings.userManagementDesc'),
      color: '#1890ff'
    },
    {
      icon: <SecurityScanOutlined style={{ fontSize: 32, color: '#52c41a' }} />,
      title: t('settings.securitySettings'),
      description: t('settings.securitySettingsDesc'),
      color: '#52c41a'
    },
    {
      icon: <DatabaseOutlined style={{ fontSize: 32, color: '#722ed1' }} />,
      title: t('settings.dataManagement'),
      description: t('settings.dataManagementDesc'),
      color: '#722ed1'
    },
    {
      icon: <BellOutlined style={{ fontSize: 32, color: '#faad14' }} />,
      title: t('settings.notificationPreferences'),
      description: t('settings.notificationPreferencesDesc'),
      color: '#faad14'
    },
    {
      icon: <GlobalOutlined style={{ fontSize: 32, color: '#13c2c2' }} />,
      title: t('settings.regionalSettings'),
      description: t('settings.regionalSettingsDesc'),
      color: '#13c2c2'
    },
    {
      icon: <ToolOutlined style={{ fontSize: 32, color: '#eb2f96' }} />,
      title: t('settings.systemConfiguration'),
      description: t('settings.systemConfigurationDesc'),
      color: '#eb2f96'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#f5222d' }} />,
      title: t('settings.complianceAudit'),
      description: t('settings.complianceAuditDesc'),
      color: '#f5222d'
    },
    {
      icon: <SettingOutlined style={{ fontSize: 32, color: '#fa8c16' }} />,
      title: t('settings.advancedOptions'),
      description: t('settings.advancedOptionsDesc'),
      color: '#fa8c16'
    }
  ];

  const systemSettings = [
    { name: 'Email Notifications', enabled: true, description: 'Receive email alerts for important events' },
    { name: 'SMS Alerts', enabled: false, description: 'Get SMS notifications for critical updates' },
    { name: 'Two-Factor Authentication', enabled: true, description: 'Enhanced security for user accounts' },
    { name: 'Auto Backup', enabled: true, description: 'Automatic daily system backups' },
    { name: 'Maintenance Mode', enabled: false, description: 'Enable system maintenance mode' },
    { name: 'Debug Logging', enabled: false, description: 'Enable detailed system logging' },
  ];

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0 }}>
          {t('settings.title')}
        </Title>
        <Space>
          <Text strong>{t('language.currentLanguage')}: </Text>
          <Select
            value={currentLanguage}
            onChange={changeLanguage}
            style={{ width: 120 }}
            options={[
              { value: 'en', label: t('language.english') },
              { value: 'zh', label: t('language.chinese') }
            ]}
          />
        </Space>
      </Row>

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

      {/* System Settings */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} lg={16}>
          <Card title={t('settings.systemConfiguration')} extra={<Button type="primary">{t('settings.saveChanges')}</Button>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {systemSettings.map((setting, index) => (
                <Card 
                  key={index} 
                  size="small" 
                  style={{ border: '1px solid #f0f0f0' }}
                >
                  <Row align="middle" justify="space-between">
                    <Col span={16}>
                      <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{setting.name}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{setting.description}</div>
                    </Col>
                    <Col span={4} style={{ textAlign: 'right' }}>
                      <Switch 
                        defaultChecked={setting.enabled} 
                        size="small"
                        onChange={(checked) => console.log(`${setting.name}: ${checked}`)}
                      />
                    </Col>
                  </Row>
                </Card>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title={t('settings.quickActions')}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <UserOutlined style={{ color: '#1890ff' }} />
                  <span>Manage Users</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <SecurityScanOutlined style={{ color: '#52c41a' }} />
                  <span>Security Audit</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <DatabaseOutlined style={{ color: '#722ed1' }} />
                  <span>Backup System</span>
                </div>
              </Card>
              <Card size="small" hoverable style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <ToolOutlined style={{ color: '#faad14' }} />
                  <span>System Health</span>
                </div>
              </Card>
            </div>
          </Card>
        </Col>
      </Row>

      {/* System Information */}
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Active Users"
              value={156}
              valueStyle={{ color: '#1890ff' }}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="System Uptime"
              value={99.8}
              precision={1}
              valueStyle={{ color: '#52c41a' }}
              prefix={<ToolOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Last Backup"
              value="2 hours"
              valueStyle={{ color: '#722ed1' }}
              prefix={<DatabaseOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Security Score"
              value={95}
              valueStyle={{ color: '#3f8600' }}
              prefix={<SecurityScanOutlined />}
              suffix="/100"
            />
          </Card>
        </Col>
      </Row>

      {/* Additional Settings */}
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title="Advanced Configuration">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>API Rate Limiting</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Configure API request limits and throttling</div>
                </div>
                <Button size="small">Configure</Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Data Retention Policy</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Set data retention and deletion policies</div>
                </div>
                <Button size="small">Configure</Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Integration Settings</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>Manage third-party integrations and APIs</div>
                </div>
                <Button size="small">Configure</Button>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;
