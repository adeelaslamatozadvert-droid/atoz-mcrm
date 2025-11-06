import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'AtoZ Advert'}
      subTitle={translate('Invoice and Quote App')}
      extra={
        <>
          <p>
            Website : <a href="https://www.atozadvert.com">www.atozadvert.com</a>{' '}
          </p>
          <p>
            UAE Website :{' '}
            <a href="https://www.atozadvert.ae">
              atozadvert.ae
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.atozadvert.com`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
