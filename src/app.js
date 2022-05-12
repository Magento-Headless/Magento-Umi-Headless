import { ConfigProvider, message } from 'antd'
import { ThemeProvider } from 'styled-components'
import { createLogger } from 'redux-logger'

import AppShell from '@components/AppShell'
import { ThemeConf } from '../config/theme.confg'

export const rootContainer = (container) => {
  return (
    <ThemeProvider theme={ThemeConf.theme}>
      <ConfigProvider prefixCls={ThemeConf.prefix}>
        <AppShell>{container}</AppShell>
      </ConfigProvider>
    </ThemeProvider>
  )
}

export const dva = {
  config: {
    onAction: createLogger(),
    onError: (err) => {
      message.error(err.message, 3)
    }
  }
}
