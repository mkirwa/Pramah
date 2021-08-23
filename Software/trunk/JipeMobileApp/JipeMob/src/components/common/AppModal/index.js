import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppModal = ({modalVisible,modalBody, modalFooter, title, setModalVisible}) => {
  return (
      <Modal visible={modalVisible} transparent>
          <TouchableOpacity style={styles.wrapper}
            onPress={()=>{
              setModalVisible(false);
            }}
          >
            <View style={styles.modalView}>
              <ScrollView>
                <View style={styles.header}> 
                  <Icon size={21} name="close"/>
                  <Text style={styles.title}>{title || 'Trip Details'}</Text>
                  <View/>
                </View>

                <View style={styles.footerSeparator} />

                <View style={styles.body}>
                      {modalBody}
                </View>
                
                {!modalFooter && (
                  <View>
                    <>
                      <View style={styles.footerSeparator} />
                      <View style={styles.footerItems}>
                        <View style={styles.footer}>
                          <Text style={styles.footerText}>In Progress</Text>
                          
                        </View>
                      </View>
                    </>
                  </View>
                )}
                {modalFooter &&(
                  <View>
                    <>
                      <View style={styles.footerSeparator} />
                      <View style={styles.footerItems}>
                        <View style={styles.footer}>
                          <Text style={styles.footerText1}>Completed</Text>
                          
                        </View>
                      </View>
                    </>
                  </View>
                )}

              </ScrollView>
          </View>
          </TouchableOpacity>
      </Modal>
    
  );
};

export default AppModal;