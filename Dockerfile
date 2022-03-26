FROM icr.io/codeengine/node:12-alpine
RUN npm install
COPY codeengine-test.js .
CMD [ "node", "codeengine-test.js" ]
