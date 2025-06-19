 (tailwind.config = {
    theme: {
      extend: {
        animation: {
          float: "float 6s ease-in-out infinite",
          fadeIn: "fadeIn 1s ease-in",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
          },
          fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        },
      },
    },
  });