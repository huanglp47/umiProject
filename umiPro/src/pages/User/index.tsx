import Guide from '@/components/Guide';
import {trim} from '@/utils/format';
import {PageContainer} from '@ant-design/pro-components';
import {useModel} from '@umijs/max';
import React from 'react';
import styles from './index.less';

import {request, useRequest} from 'umi';

export default () => {
    const {name} = useModel('global');
    // const result = fetch('/api/v1/search?query=redux');
    // console.log(result)

    const {data, error, loading} = useRequest(() => {
        return request('/api/v1/search?query=redux', {
            // params: { query : 'redux' },
        })
    });
    console.log('1111---------------')
    console.log(data)
    console.log(error)
    console.log(loading)
    console.log('2222---------------')

    return (
        <PageContainer ghost>
            <div className={styles.container}>
                <Guide name={trim(name)}/>
            </div>
        </PageContainer>
    );
};
