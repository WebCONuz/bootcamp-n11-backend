import express from "express";
const PORT = 3000;
const app = express();
app.get("/api/user", (req, res) => {
    res.status(200).send({ status: "OK" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map