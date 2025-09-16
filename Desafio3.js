import React, { useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={() => {}} disabled={!email || !senha}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.linkText}>Ir para Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate("RedefinirSenha")}>
        <Text style={styles.linkText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

function CadastroScreen({ navigation }) {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const allFilled = cpf && nome && email && senha;
  const salvar = () => {
    Alert.alert("Sucesso", "Usuário registrado com sucesso", [{ text: "OK", onPress: () => navigation.popToTop() }], { cancelable: false });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="CPF" keyboardType="number-pad" value={cpf} onChangeText={setCpf} />
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <TouchableOpacity style={[styles.button, allFilled ? styles.buttonPrimary : styles.buttonDisabled]} onPress={salvar} disabled={!allFilled}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function RedefinirSenhaScreen({ navigation }) {
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const senhaRef = useRef(null);
  const confirmarRef = useRef(null);
  const concluir = () => {
    if (senha !== confirmar) {
      Alert.alert("Erro", "Senhas não são iguais", [{ text: "OK", onPress: () => senhaRef.current && senhaRef.current.focus() }], { cancelable: false });
      return;
    }
    Alert.alert("Sucesso", "Senha redefinida com sucesso", [{ text: "OK", onPress: () => navigation.popToTop() }], { cancelable: false });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <TextInput
        ref={senhaRef}
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        returnKeyType="next"
        onSubmitEditing={() => confirmarRef.current && confirmarRef.current.focus()}
      />
      <TextInput
        ref={confirmarRef}
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmar}
        onChangeText={setConfirmar}
        returnKeyType="done"
        onSubmitEditing={concluir}
      />
      <TouchableOpacity style={[styles.button, senha && confirmar ? styles.buttonPrimary : styles.buttonDisabled]} onPress={concluir} disabled={!senha || !confirmar}>
        <Text style={styles.buttonText}>Concluir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton} onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Voltar para Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="RedefinirSenha" component={RedefinirSenhaScreen} options={{ title: "Redefinição de Senha" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", gap: 12, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "600", marginBottom: 8, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12 },
  button: { padding: 14, borderRadius: 8, alignItems: "center" },
  buttonPrimary: { backgroundColor: "#2e7d32" },
  buttonDisabled: { backgroundColor: "#a5a5a5" },
  buttonText: { color: "#fff", fontWeight: "600" },
  linkButton: { padding: 8, alignItems: "center" },
  linkText: { color: "#1976d2", fontWeight: "500" }
});
