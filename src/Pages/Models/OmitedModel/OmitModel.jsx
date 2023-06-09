// import React from 'react'
import styles from './OmitModel.module.scss'
import Menus from '../ModelIcons/v-menu.svg'
import Modify from '../ModelIcons/modify.svg'
import Deactive from '../ModelIcons/deactivate.svg'
import Delete from '../ModelIcons/delete.svg'
import CloseBTN from '../ModelIcons/close.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  // createMultiStyleConfigHelpers, 
  // defineStyle
} from '@chakra-ui/react'
// import { menuAnatomy } from '@chakra-ui/anatomy'


const OmitModel = () => {

  // const { definePartsStyle, defineMultiStyleConfig } =
  // createMultiStyleConfigHelpers(menuAnatomy.keys)
  // const variants = {
  //   roundLeft: {
  //     button: {
  //       borderLeftRadius: 'full',
  //       pl: '6',
  //     },
  //   },
  //   roundRight: {
  //     button: {
  //       borderRightRadius: 'full',
  //       pr: '6',
  //     },
  //   },
  // }
  
 
  return (
    <>
    <div className={styles.ModelWrapper}>
      <div className={styles.ModelAlpha}>
          <div className={styles.activeModel}>
              <h2 className={styles.title_type}>Alpha Model</h2>
              <button className={styles.btn_active}>Active</button>
              <Menu>
                <MenuButton
                  className={styles.iconMenu}
                  as={IconButton}
                  aria-label='Options'
                  icon={<img src={Menus} alt='menu'/>}
                  variant='outline'
                />
                <MenuList className={styles.dropDialog}>
                  <MenuItem icon={<img src={CloseBTN} alt="close" />} className={styles.btn_Close}>                  
                  </MenuItem>
                  <MenuItem icon={<img src={Modify} alt="modify" />}>
                    Modify
                  </MenuItem>
                  <MenuItem icon={<img src={Deactive} alt="deactivate" />}>
                    Deactivate
                  </MenuItem>
                  <MenuItem icon={<img src={Delete} alt="delete" />}>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
          </div>
          <p className={styles.createdBy}>Created by Tofunmi on 2/04/2023</p>
      </div>

      <div className={styles.ModelOmega}>
          <div className={styles.inactiveModel}>
              <h2 className={styles.title_type}>Omega Model</h2>
              <button className={styles.btn_inactive}>Inactive</button>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<img src={Menus} alt='menu' className={styles.iconMenu}/>}
                  // variant='outline'
                />
                <MenuList>
                  <MenuItem icon={<img src={Modify} alt="modify" />}>
                    Modify
                  </MenuItem>
                  <MenuItem icon={<img src={Deactive} alt="deactivate" />}>
                    Deactivate
                  </MenuItem>
                  <MenuItem icon={<img src={Delete} alt="delete" />}>
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
          </div>
          <p className={styles.createdBy}>Created by Shakirat on 2/04/2023</p>
      </div>
    </div>

  
    {/* <div className={styles.dropDialog}>
      <img src={BTNC} alt="close"  className={styles.btn_Close}/>
      <li className={styles.activeList}> <img src={Modify} alt="modify" /> Modify</li>
      <li className={styles.activeList}> <img src={Deactive} alt="deactivate" /> Deactivate</li>
      <li className={styles.activeList}> <img src={Delete} alt="delete" /> Delete</li>
    </div> */}
    </>

  )
}

export default OmitModel