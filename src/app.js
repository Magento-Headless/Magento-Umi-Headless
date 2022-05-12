import { ConfigProvider, message } from 'antd';
import { createLogger } from 'redux-logger';

import { ThemeConf } from '../config/theme.confg';

export const rootContainer = (container) => {
  return (
    <ConfigProvider prefixCls={ThemeConf.prefix}>
      <div>{container}</div>
    </ConfigProvider>
  );
};

export const dva = {
  config: {
    onAction: createLogger(),
    onError: (err) => {
      message.error(err.message, 3);
    },
  },
};
