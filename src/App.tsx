import * as yup from "yup";
import { Box } from "@mui/material";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useFormik } from "formik";
import { useCommon } from "./hooks/useCommon";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "./api/get-profile";
import { registerUser } from "./api/register-user";

const validationSchema = yup.object({
  name: yup.string().required("Campo obrigatório"),
});

export default function App() {
  const { loading, setLoading } = useCommon();

  const { data: profile } = useQuery({
    queryKey: ["get-profile"],
    queryFn: getProfile,
  });

  console.log(profile);

  const { mutateAsync: registerUserFn } = useMutation({
    mutationFn: registerUser,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = {
        name: values.name,
      };
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));

      console.log(formData);

      registerUserFn(formData);

      setLoading(false);
    },
  });

  return (
    <Box p={5} width={500}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome do perfil*"
          placeholder="Nome do perfil"
          error={Boolean(formik.touched.name && formik.errors.name)}
          errorMessage={formik.errors.name}
          {...formik.getFieldProps("name")}
          disabled={loading}
        />

        <Button
          placeholder="Click me"
          theme="primary"
          size="large"
          type="submit"
          disabled={loading}
          style={{ marginTop: 20 }}
        />
      </form>
    </Box>
  );
}
