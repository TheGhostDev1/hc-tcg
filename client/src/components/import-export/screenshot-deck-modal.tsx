import classNames from 'classnames'
import {LocalCardInstance} from 'common/types/server-requests'
import Card from 'components/card'
import {Modal} from 'components/modal'
import css from './import-export.module.scss'

type Props = {
	setOpen: boolean
	cards: Array<LocalCardInstance>
	onClose: () => void
}

export function ScreenshotDeckModal({setOpen, cards, onClose}: Props) {
	const maxLength = Math.max(cards.length, 42)

	return (
		<Modal
			title="Full Deck"
			setOpen={setOpen}
			onClose={onClose}
			veryWide={true}
		>
			<div className={css.fullDeckContainer}>
				<div
					className={classNames(css.cardListContainer, css.showOnMobile)}
					style={{
						gridTemplateRows: `repeat(${maxLength / 6}, ${(42 - (maxLength - 42) / 3) / 3}vw)`,
						gridTemplateColumns: `repeat(${Math.ceil(maxLength / (maxLength / 6))}, ${(42 - (maxLength - 42) / 3) / 3}vw)`,
					}}
				>
					{cards.map((card) => {
						return (
							<Card
								card={card.props}
								displayTokenCost={false}
								key={card.entity}
								tooltipAboveModal={true}
							/>
						)
					})}
				</div>
				<div
					className={classNames(css.cardListContainer, css.hideOnMobile)}
					style={{
						gridTemplateRows: `repeat(${maxLength / 9}, ${(42 - (maxLength - 42)) / 5.25}vw)`,
						gridTemplateColumns: `repeat(${Math.ceil(maxLength / (maxLength / 9))}, ${((42 - (maxLength - 42)) * 1) / 5.25}vw)`,
					}}
				>
					{cards.map((card) => {
						return (
							<Card
								card={card.props}
								displayTokenCost={false}
								key={card.entity}
								tooltipAboveModal={true}
							/>
						)
					})}
				</div>
			</div>
		</Modal>
	)
}