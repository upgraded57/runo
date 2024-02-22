import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RoutePaths } from "./utils/RoutePaths";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {RoutePaths.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
