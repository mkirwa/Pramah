import React from 'react';
import {View, Text, Modal} from 'react-native';
import AppModal from '../common/AppModal';
import styles from './styles';

const LoadsModalComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
        <AppModal setModalVisible={setModalVisible} modalVisible={modalVisible}
            modalBody={
                <View >
                    <Text style={styles.bodyText}> {'\n'}</Text>
                    <Text style={styles.bodyText}>Origin: {'\n'}</Text>
                    <Text style={styles.bodyText}>Destination: {'\n'}</Text>
                    <Text style={styles.bodyText}>Start Time: {'\n'}</Text>
                    <Text style={styles.bodyText}>End Time: {'\n'}</Text>
                    <Text style={styles.bodyText}>Distance: {'\n'}</Text>
                </View>
                
            }
        />
    </View>
  );
};

export default LoadsModalComponent;