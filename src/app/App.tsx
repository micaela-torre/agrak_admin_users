import { ChakraProvider } from "@chakra-ui/react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ErrorBoundary from "../ErrorBoundary";
import Routes from "../navigation/routes";
import { Container } from "../components/Container/Container";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#ff6f00",
    },
  },
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: true,
      retry: 1,
      retryDelay: (attempt) => attempt * 1000,
    },
  },
});
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Container>Cargando...</Container>}>
        <QueryClientProvider client={queryClient}>
          <MuiThemeProvider theme={materialTheme}>
            <ChakraProvider>
              <Routes />
            </ChakraProvider>
          </MuiThemeProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
