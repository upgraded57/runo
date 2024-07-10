import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContextProvider } from "./utils/UserContext";

import { RoutePaths } from "./utils/RoutePaths";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            {RoutePaths.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
