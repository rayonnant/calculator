import {FC, PropsWithChildren} from 'react';
import {Avatar, Layout} from 'antd';
import {UserOutlined} from '@ant-design/icons';


export const CommonLayout: FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <Layout style={{
        height: '100vh',
        display: 'flex'
    }}>
      <Layout.Header>
        <Avatar shape="square" size={'small'} icon={<UserOutlined />} />
      </Layout.Header>
      <Layout.Content style={{
          alignContent: 'center',
          marginRight: '15px',
          marginLeft: '15px'
      }}>
        {children}
      </Layout.Content>
      <Layout.Footer> </Layout.Footer>
    </Layout>
  )
}
