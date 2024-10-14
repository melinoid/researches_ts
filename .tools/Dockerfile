FROM node:lts-bullseye-slim

WORKDIR /autotests

COPY . .

RUN npm i --ignore-scripts && \
    . .tools/remove_reporter_dirs && \
    # This rm is to lighten the image
    rm -rf $(find . -name 'LIC*' -o -name '*ense*' -o -name 'REA*' -o -name '*dme*' -o -name '*hange*og*' \
    -o -name '*HANGE*' -o -name 'HIS*' -o -name '*tory.md' -o -name 'rele*.md' -o -name '*lease' -o -name 'secur*' \
    -o -name 'SECU*' -o -name '.cove*' -o -name '.edi*' -o -name '.esl*' -o -name '.git*' -o -name '.idea' -o -name '.npmi*' \
    -o -name '.trav*' -o -name '.zu*' -o -name 'A*md' -o -name 'AUTHO*' -o -name 'CONT*' -o -name '*ghtN*' -o -name 'FUN*' \
    -o -name '*p_s*' -o -name 'man' -o -name 'MIG*' -o -name 'NOT*' -o -name 'PAT*' -o -name '*g-B*' -o -name 'PUL*' \
    -o -name 'ThirdP*' -o -name 'UPG*' -o -name 'vend*')


RUN npx playwright install --with-deps chromium && \
    # This move for docker-compose
    mv node_modules / && \
    ln -s /node_modules ./node_modules


CMD ["npx", "playwright", "test"]
