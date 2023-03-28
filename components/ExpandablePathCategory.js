import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import Collapsible from 'react-native-collapsible'
import Accordtion from 'react-native-collapsible/Accordion'

const ExpandablePathCategory = () => {
  const [activeSections, setActiveSections] = React.useState([])
  const [collapsed, setCollapsed] = React.useState(true)
  const [multipleSelect, setMultipleSelect] = React.useState(false)

  const toggleExpand = () => {
    setCollapsed(!collapsed)
  }
  const renderHeader = () => {
    return (
    <Animatable.View
      duration={400}
      style={[styles.PathCategoryContainer, isActive ? styles.active : styles.inactive]}
      transition="backgroundColor">
      <Text style={styles.PathCategotyText}>{title}</Text>
      </Animatable.View>
  )
  };

  const renderContent = () => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.PathCategoryContentContainer, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text></Animatable.Text>
      </Animatable.View>
    )
  }
  
}

export default ExpandablePathCategory

const styles = StyleSheet.create({})