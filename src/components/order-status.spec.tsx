import { render } from "@testing-library/react"

import { OrderStatus } from "./order-status"

describe('Order Status', () => {
    it('should display ther right text when order status is pending', () => {
        let wrapper = render(<OrderStatus status='pending' />)

        wrapper.debug()

        let statusText = wrapper.getByText('Pendente')
        let badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-slate-400')
    })

    it('should display ther right text when order status is canceled', () => {
        let wrapper = render(<OrderStatus status='canceled' />)

        wrapper.debug()

        let statusText = wrapper.getByText('Cancelado')
        let badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-rose-500')
    })

    it('should display ther right text when order status is processing', () => {
        let wrapper = render(<OrderStatus status='processing' />)

        wrapper.debug()

        let statusText = wrapper.getByText('Em preparo')
        let badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })

    it('should display ther right text when order status is delivering', () => {
        let wrapper = render(<OrderStatus status='delivering' />)

        wrapper.debug()

        let statusText = wrapper.getByText('Em entrega')
        let badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })

    it('should display ther right text when order status is delivered', () => {
        let wrapper = render(<OrderStatus status='delivered' />)

        wrapper.debug()

        let statusText = wrapper.getByText('Entregue')
        let badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-emerald-500')
    })
})