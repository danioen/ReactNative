import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Pressable,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Botão só habilita quando ambos tiverem conteúdo
  const podeEntrar = email.trim().length > 0 && senha.trim().length > 0;

  const handleEntrar = () => {
    Alert.alert('Login realizado com sucesso!');
  };

  const handleRegistrar = () => {
    Alert.alert('Tela de Registro em breve!');
  };

  const handleRedefinir = () => {
    Alert.alert('Tela de redefinição de senha em breve!');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          {/* Imagem acima dos campos */}
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }}
            resizeMode="contain"
            style={styles.logo}
            accessible
            accessibilityLabel="Logo do aplicativo"
          />

          <Text style={styles.title}>Bem-vindo</Text>

          <View style={styles.field}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="seuemail@exemplo.com"
              keyboardType="email-address" // aceita formato de e-mail
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="emailAddress"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#9CA3AF"
              accessibilityLabel="Campo de e-mail"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              secureTextEntry // protege a senha
              textContentType="password"
              value={senha}
              onChangeText={setSenha}
              placeholderTextColor="#9CA3AF"
              accessibilityLabel="Campo de senha"
            />
          </View>

          <View style={styles.buttonWrap}>
            <Button
              title="ENTRAR"
              onPress={handleEntrar}
              disabled={!podeEntrar}
            />
          </View>

          <View style={styles.linksRow}>
            <Pressable onPress={handleRegistrar} accessibilityRole="link">
              <Text style={styles.link}>Registrar-se</Text>
            </Pressable>
            <Text style={styles.dot}>•</Text>
            <Pressable onPress={handleRedefinir} accessibilityRole="link">
              <Text style={styles.link}>Redefinir a Senha</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    width: 96,
    height: 96,
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
    color: '#111827',
  },
  field: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
  },
  buttonWrap: {
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  linksRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
  dot: {
    marginHorizontal: 10,
    color: '#9CA3AF',
  },
});
