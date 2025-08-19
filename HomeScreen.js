import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Barra de pesquisa */}
      <TextInput
        placeholder="Pesquisar"
        placeholderTextColor="#ccc"
        style={styles.searchBar}
      />

      {/* Perfil e favoritos */}
      <View style={styles.profileRow}>
        <Icon name="account-circle" size={40} color="#fff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.profileName}>Meu</Text>
          <Text style={styles.profileLabel}>Perfil</Text>
        </View>
        <View style={{ flex: 1 }} />
        <Icon name="star-border" size={32} color="#fff" />
      </View>

      {/* Ofertas recentes */}
      <View style={styles.offersBox}>
        <Text style={styles.offersTitle}>Ofertas Recentes:</Text>
        <View style={styles.separator} />
        <ScrollView>
          <View style={styles.offerItem}>
            <Icon name="star-border" size={20} color="#fff" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.offerGame}>WoW</Text>
              <Text style={styles.offerDesc}>Busco grupo para XX</Text>
            </View>
          </View>
          <View style={styles.offerItem}>
            <Icon name="star-border" size={20} color="#fff" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.offerGame}>MIR4</Text>
              <Text style={styles.offerDesc}>Procuro dupla para farm</Text>
            </View>
          </View>
          <View style={styles.offerItem}>
            <Icon name="star-border" size={20} color="#fff" />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.offerGame}>Black Desert</Text>
              <Text style={styles.offerDesc}>Recrutando novatos</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Botão de nova oferta */}
      <TouchableOpacity style={styles.newOfferBtn}>
        <Text style={{ color: '#fff', fontSize: 18 }}>+ Oferta</Text>
      </TouchableOpacity>

      {/* Menu sanduíche */}
      <TouchableOpacity style={styles.menuBtn}>
        <Icon name="menu" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d0036',
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 12,
    fontSize: 18,
    marginBottom: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileLabel: {
    color: '#ccc',
    fontSize: 16,
  },
  offersBox: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#fff',
  },
  offersTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  offerGame: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerDesc: {
    color: '#ccc',
    fontSize: 14,
  },
  newOfferBtn: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  menuBtn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: 'transparent',
  },
});