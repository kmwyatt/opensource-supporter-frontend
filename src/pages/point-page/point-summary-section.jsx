import PointsSummaryBox from '@/components/points-summary-box'
import { useModal } from '@/hooks/use-modal.js'
import AddChargeModal from '@/components/add-charge-modal.jsx'
import AddWithdrawCashModal from '@/components/add-withdraw-cash-modal.jsx'

export default function PointSummarySection() {
    const addChargeModal = useModal()
    const addWithdrawCashModal = useModal()

    return (
        <div className="point-summary-section-container">
            <div className="point-summary-section-header">
                <div className="hearder-title">Summary</div>
                <div className="charge-btn" onClick={addChargeModal.open}>
                    PayPal Charge
                </div>
            </div>
            <div className="point-summary-section-body">
                <div className="summary-box">
                    <PointsSummaryBox
                        method="Github"
                        points="11301"
                        profitRate="2.5"
                        indicator="up"
                    />
                    <PointsSummaryBox
                        method="Paypal"
                        points="24032"
                        profitRate="1.7"
                        indicator="down"
                    />
                    <PointsSummaryBox
                        method="Ads"
                        points="203"
                        profitRate="0.0"
                        indicator="unchanged"
                    />
                    <div
                        className="sponsor-summary-box"
                        onClick={addWithdrawCashModal.open}
                    >
                        <PointsSummaryBox
                            method="Sponsor"
                            points="1000"
                            profitRate="10.5"
                            indicator="up"
                        />
                    </div>
                </div>
            </div>
            {addChargeModal.visible && (
                <AddChargeModal close={addChargeModal.close} />
            )}
            {addWithdrawCashModal.visible && (
                <AddWithdrawCashModal close={addWithdrawCashModal.close} />
            )}
        </div>
    )
}
