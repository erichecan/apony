import React from 'react';
import { Form, Input, Checkbox, Button, Card, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const onFinish = (values) => {
    // Mock login - just navigate to dashboard
    console.log('Login attempt:', values);
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card
        style={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 12,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255,255,255,0.95)'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title level={2} style={{ color: '#1890ff', marginBottom: 8 }}>
            {t('login.title')}
          </Title>
          <Text type="secondary">
            {t('login.subtitle')}
          </Text>
        </div>

        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: t('login.username') + '!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder={t('login.username')}
              style={{ borderRadius: 8 }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: t('login.password') + '!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder={t('login.password')}
              style={{ borderRadius: 8 }}
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{t('login.rememberMe')}</Checkbox>
            </Form.Item>

            <a style={{ float: 'right' }} href="#">
              {t('login.forgotPassword')}
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                height: 48,
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600
              }}
              icon={<LoginOutlined />}
            >
              {t('login.logIn')}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Text type="secondary">
            {t('login.demoAccount')}
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
