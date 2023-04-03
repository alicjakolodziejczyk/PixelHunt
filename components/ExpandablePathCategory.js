import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

const CONTENT = [
  {
    title: 'Śladami Sławnych',
    image: require('../assets/ŚladamiSławnych.png'),
    content: "COŚ"
  },
  {
    title: 'Ekologiczna',
    image: require('../assets/Ekologiczna.png'),
    content: "COŚ"
  },
  {
    title: 'Zen',
    image: require('../assets/Zen.png'),
    content: "COŚ"
  },
  {
    title: 'Dla dzieci',
    image: require('../assets/DlaDzieci.png'),
    content: "COŚ"
  },
  {
    title: 'Historyczna',
    image: require('../assets/historyczna.png'),
    content: "COŚ"
  },
];

const ExpandablePathCategory = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [multipleSelect] = useState(true);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={200}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
          <View style={styles.headerContent}>
            <Image source={section.image} style={{width:75, height:75}}/>
            <Text style={styles.headerText}>{section.title}</Text>
            <Image source={require('../assets/expand.png')} style={isActive ? styles.expanded : styles.hidden}/>
          </View>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.activeContent : styles.inactiveContent]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.selectTitle}>
            Choose a path category
          </Text>

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExpandablePathCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '90%',
    alignSelf: 'center',
    marginVertical: '5%',
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },

  },
  selectTitle: {
    fontSize: 24,
    fontWeight: '500',
    padding: 20,
    textAlign: 'center',
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  expanded: {
    width: 20,
    height: 20,
  },

  hidden: {
    width: 20,
    height: 20,
    transform: [{ rotate: '180deg' }],
  },

  active: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    padding: 5,
  },

  content: {
    paddingVertical: 20,
  }
});