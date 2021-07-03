import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useTokenA from '../../../hooks/useTokenA'
import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const tokenA = useTokenA()

  return (
    <div>
      <Modal>
        <ModalTitle text="My Account" />
        <ModalContent>
          <Spacer />

          <div style={{ display: 'flex' }}>
            <StyledBalanceWrapper>
              <CardIcon>
                {/* <img src={accountImg}></img> */}
              </CardIcon>
              <StyledBalance>
              </StyledBalance>
            </StyledBalanceWrapper>
          </div>

          <Spacer />
          <div style={{width: 316, marginLeft: 'auto', marginRight: 'auto', position: 'relative', bottom: 12,}}>
            <Button
              href={`https://rinkeby.etherscan.io/address/0xd3dde681367d039b60bc47eec04c69bd7cb8a266`}
              text="View on Etherscan"
              variant="secondary"
            />
          </div>
          <Spacer />
          <div style={{width: 316, marginLeft: 'auto', marginRight: 'auto', position: 'relative', bottom: 12,}}>
            <Button
              onClick={handleSignOutClick}
              text="Sign out"
              variant="secondary"
            />
          </div>
        </ModalContent>
        <ModalActions>
          <div style={{width: 180, marginLeft: 'auto', marginRight: 'auto', position: 'relative', bottom: 12,}}>
            <Button onClick={onDismiss} text="Cancel" />
          </div>
        </ModalActions>
      </Modal>
    </div>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

export default AccountModal
