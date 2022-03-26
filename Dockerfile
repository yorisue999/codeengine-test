FROM icr.io/codeengine/node:12-alpine
RUN npm install axios
COPY codeengine-test.js .
CMD [ "node", "codeengine-test.js" ]
