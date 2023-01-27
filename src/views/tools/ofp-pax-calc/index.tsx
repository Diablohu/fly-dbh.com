import { useState, useCallback, useMemo, FormEventHandler } from 'react';
import { extend } from 'koot';
import axios from 'axios';
import classNames from 'classnames';

import Frame from '@views/frame';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

interface ComponentProps {
    customProps?: string;
}
interface OFP {
    weights: {
        oew: string;
        pax_count: string;
        /** 平均乘客重 */
        pax_weight: string;
        payload: string;
        cargo: string;
    };
}

// PAX: N
// 	warning: >50

// PAX has N Pilot / Crew
// Passengers

// Total Pax Weight
// + Cargo = Payload

// last pax cannot be locked

// ToolPax
// 	ofp
// 	weightCargo
// 	weightPayload
// 	weightPax
// 	weightPaxLocked	[]
// 	countPax
// 	countCrew
//  indexOperating

// 	weightPaxRemaining
// 	countPaxRemaining

// 	lock

// PaxSingular
// 	weight
// 	locked
// 	index

// Functional Component =======================================================

const OfpPaxCalc = extend<ComponentProps>({
    styles,
})(({ className }): JSX.Element => {
    const [OFP, setOFP] = useState<undefined | 'LOADING' | OFP>();

    const onOFPSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        (evt) => {
            setOFP('LOADING');

            const formData = new FormData(evt.currentTarget);
            evt.preventDefault();

            axios
                .get<OFP>(
                    `https://www.simbrief.com/api/xml.fetcher.php?username=${formData.get(
                        'simbrief_username'
                    )}&json=1`
                )
                .then((res) => {
                    setOFP(res.data);
                })
                .catch((err) => {
                    console.error(err);
                    setOFP(undefined);
                });
        },
        []
    );

    return (
        <Frame>
            <div
                className={classNames([
                    className,
                    {
                        'is-loading': OFP === 'LOADING',
                    },
                ])}
            >
                <form
                    className={`${classNameModule}-load-ofp`}
                    onSubmit={onOFPSubmit}
                    method="get"
                    action="https://www.simbrief.com/api/xml.fetcher.php?json=1"
                >
                    <label>
                        <span>SimBrief 用户名</span>
                        <input name="simbrief_username" />
                    </label>
                    <input type="submit" />
                </form>
                {typeof OFP === 'object' && (
                    <div className={`${classNameModule}-ofp`}>
                        <dl>
                            <dt>总乘客数 PAX</dt>
                            <dd>{OFP.weights.pax_count}</dd>
                        </dl>
                        <dl>
                            <dt>乘客总重 (KG)</dt>
                            <dd>
                                {Number(OFP.weights.payload) -
                                    Number(OFP.weights.cargo)}
                            </dd>
                        </dl>
                        <dl>
                            <dt>乘客平均体重 (KG)</dt>
                            <dd>{OFP.weights.pax_weight}</dd>
                        </dl>
                        <dl>
                            <dt>货物总重 (KG)</dt>
                            <dd>{OFP.weights.cargo}</dd>
                        </dl>
                        <dl>
                            <dt>总载重 (KG)</dt>
                            <dd>{OFP.weights.payload}</dd>
                        </dl>
                    </div>
                )}
            </div>
        </Frame>
    );
});

export default OfpPaxCalc;
