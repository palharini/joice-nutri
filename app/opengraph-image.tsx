import { ImageResponse } from "next/og";



export const alt =
  "Joice Benedett - Nutricionista | Nutrição Clínica, Esportiva e Saúde da Mulher";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f7f5ef",
          color: "#18181b",
          padding: "72px 80px",
        }}
      >
        {/* Elemento decorativo */}
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "#ebe7dc",
            top: -130,
            right: -80,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            border: "1px solid #d6d3d1",
            bottom: -90,
            right: 170,
          }}
        />

        {/* Conteúdo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#71717a",
            }}
          >
            Nutrição • Saúde • Bem-estar
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#18181b",
            }}
          >
            Joice Benedett
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 34,
              color: "#52525b",
            }}
          >
            Nutricionista
          </div>

          <div
            style={{
              display: "flex",
              width: 90,
              height: 3,
              marginTop: 36,
              background: "#18181b",
            }}
          />

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 25,
              lineHeight: 1.4,
              color: "#52525b",
            }}
          >
            Nutrição Clínica • Esportiva • Saúde da Mulher
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}